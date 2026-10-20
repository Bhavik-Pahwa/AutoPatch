import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { workflows, initialExecutions, initialRepairs, scenarios, type Workflow, type Execution, type Repair, type ScenarioId } from '@/data/fixtures'

interface DemoState {
  workflows: Workflow[]; executions: Execution[]; repairs: Repair[]; compact: boolean
  addWorkflow: (workflow: Workflow) => void
  finishRepair: (scenario: ScenarioId, sessionId: string) => void
  finishRun: (workflowId: string, failed: boolean) => void
  setCompact: (compact: boolean) => void
  reset: () => void
}
const fresh = () => structuredClone({ workflows, executions: initialExecutions, repairs: initialRepairs })
export const useDemo = create<DemoState>()(persist((set) => ({
  ...fresh(), compact:false,
  addWorkflow: workflow => set(s => ({workflows:[...s.workflows,workflow]})),
  finishRepair: (scenario, sessionId) => set(state => {
    if (state.repairs.some(r=>r.id===sessionId)) return state
    const fixture = scenarios[scenario], accepted = scenario !== 'validation'
    const timestamp = new Date().toISOString()
    const current = state.workflows.find(w=>w.id===fixture.workflowId)!
    // Replays demonstrate a historical fixture, never downgrade a newer stored version.
    const newer = Number(fixture.to.slice(1)) >= Number(current.version.slice(1))
    const version = accepted && newer ? fixture.to : current.version
    return {
      workflows:state.workflows.map(w=>w.id===fixture.workflowId?{...w,status:accepted?'Healthy':'Attention required',version,lastRun:timestamp,recoveries:w.recoveries+1,steps:accepted&&newer?w.steps.map(step=>step.id==='locate'?{...step,action:fixture.after}:step):w.steps}:w),
      repairs:[{id:sessionId,workflowId:fixture.workflowId,scenario,accepted,from:fixture.from,to:fixture.to,timestamp},...state.repairs],
      executions:[{id:`run-${sessionId}`,workflowId:fixture.workflowId,started:timestamp,duration:accepted?'18.4 s':'21.2 s',status:accepted?'Recovered':'Failed',recoveryId:sessionId,version},...state.executions],
    }
  }),
  finishRun: (workflowId, failed) => set(state => {
    const workflow=state.workflows.find(w=>w.id===workflowId)!
    const started=new Date().toISOString()
    return {workflows:state.workflows.map(w=>w.id===workflowId?{...w,status:failed?'Failed':'Healthy',lastRun:started}:w),executions:[{id:`run-${crypto.randomUUID().slice(0,8)}`,workflowId,started,duration:failed?'5.0 s':'2.8 s',status:failed?'Failed':'Successful',version:workflow.version},...state.executions]}
  }),
  setCompact: compact=>set({compact}),
  reset:()=>set({...fresh(),compact:false}),
}),{name:'autopatch-demo-v1',version:1}))
