import { beforeEach, describe, expect, it } from 'vitest'
import { playbackReducer, terminalStage, type Playback } from './simulation'
import { useDemo } from './store'

const initial:Playback={stage:-1,playing:false,speed:1,scenario:'selector',sessionId:'test-session'}
describe('deterministic playback',()=>{
 it('plays, pauses, steps and caps a successful scenario',()=>{
  let s=playbackReducer(initial,{type:'play'})
  expect(s.playing).toBe(true)
  s=playbackReducer(s,{type:'step'})
  s=playbackReducer(s,{type:'pause'})
  expect(s).toMatchObject({stage:0,playing:false})
  for(let i=0;i<12;i++)s=playbackReducer(s,{type:'step'})
  expect(s).toMatchObject({stage:7,playing:false})
  expect(playbackReducer(s,{type:'play'}).playing).toBe(false)
 })
 it('stops a rejected candidate before execution resumes',()=>{
  let s:Playback={...initial,scenario:'validation',playing:true}
  for(let i=0;i<12;i++)s=playbackReducer(s,{type:'step'})
  expect(s.stage).toBe(6)
  expect(s.playing).toBe(false)
  expect(terminalStage(s.scenario)).toBe(6)
 })
 it('scenario changes clear playback and allocate an independent session',()=>{
  const s=playbackReducer({...initial,stage:4,playing:true},{type:'scenario',value:'navigation'})
  expect(s).toMatchObject({stage:-1,playing:false,scenario:'navigation'})
  expect(s.sessionId).not.toBe(initial.sessionId)
 })
 it('reset retains speed and scenario but clears progress',()=>{
  const s=playbackReducer({...initial,stage:5,playing:true,speed:2},{type:'reset'})
  expect(s).toMatchObject({stage:-1,playing:false,speed:2,scenario:'selector'})
 })
})
describe('shared demo integrity',()=>{
 beforeEach(()=>useDemo.getState().reset())
 it('accepts a navigation repair and writes one coherent execution',()=>{
  useDemo.getState().finishRepair('navigation','navigation-test')
  const state=useDemo.getState(),workflow=state.workflows.find(w=>w.id==='wf-002')!
  expect(workflow.version).toBe('v1.2')
  expect(workflow.status).toBe('Healthy')
  expect(workflow.steps[2].action).toContain('/open-roles')
  expect(state.executions[0]).toMatchObject({workflowId:workflow.id,version:workflow.version,status:'Recovered',recoveryId:'navigation-test'})
  expect(state.repairs[0].accepted).toBe(true)
 })
 it('rejects failed validation and preserves the original code and version',()=>{
  const original=structuredClone(useDemo.getState().workflows.find(w=>w.id==='wf-004')!)
  useDemo.getState().finishRepair('validation','rejected-test')
  const state=useDemo.getState(),workflow=state.workflows.find(w=>w.id==='wf-004')!
  expect(workflow.version).toBe(original.version)
  expect(workflow.steps).toEqual(original.steps)
  expect(workflow.status).toBe('Attention required')
  expect(state.repairs[0].accepted).toBe(false)
  expect(state.executions[0]).toMatchObject({version:'v1.0',status:'Failed'})
 })
 it('does not duplicate completed sessions or downgrade a newer version',()=>{
  useDemo.getState().finishRepair('relocated','newer')
  useDemo.getState().finishRepair('selector','older')
  const count=useDemo.getState().executions.length
  useDemo.getState().finishRepair('selector','older')
  expect(useDemo.getState().executions.length).toBe(count)
  expect(useDemo.getState().workflows[0].version).toBe('v1.4')
  expect(useDemo.getState().workflows[0].steps[2].action).toContain("getByRole")
 })
 it('reset restores all workflow, repair and execution fixtures',()=>{
  useDemo.getState().finishRepair('navigation','temporary')
  useDemo.getState().setCompact(true)
  useDemo.getState().reset()
  expect(useDemo.getState().workflows[1].version).toBe('v1.1')
  expect(useDemo.getState().repairs).toHaveLength(2)
  expect(useDemo.getState().executions).toHaveLength(28)
  expect(useDemo.getState().compact).toBe(false)
 })
})
