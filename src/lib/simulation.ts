import { useEffect, useReducer, useRef } from 'react'
import type { ScenarioId } from '@/data/fixtures'
export interface Playback { stage: number; playing: boolean; speed: number; scenario: ScenarioId; sessionId: string }
export type PlaybackAction = {type:'play'|'pause'|'step'|'reset'} | {type:'speed';value:number} | {type:'scenario';value:ScenarioId}
export function terminalStage(scenario:ScenarioId){return scenario==='validation'?6:7}
export function playbackReducer(state:Playback, action:PlaybackAction):Playback {
  switch(action.type){
    case 'play': return state.stage>=terminalStage(state.scenario)?state:{...state,playing:true}
    case 'pause': return {...state,playing:false}
    case 'step': {const stage=Math.min(state.stage+1,terminalStage(state.scenario));return {...state,stage,playing:stage<terminalStage(state.scenario)&&state.playing}}
    case 'speed': return {...state,speed:action.value}
    case 'reset': return {...state,stage:-1,playing:false,sessionId:crypto.randomUUID()}
    case 'scenario': return {...state,scenario:action.value,stage:-1,playing:false,sessionId:crypto.randomUUID()}
  }
}
export function usePlayback(initial:ScenarioId, onComplete:(scenario:ScenarioId,sessionId:string)=>void){
  const [state,dispatch]=useReducer(playbackReducer,{stage:-1,playing:false,speed:1,scenario:initial,sessionId:crypto.randomUUID()})
  const callback=useRef(onComplete)
  useEffect(()=>{callback.current=onComplete},[onComplete])
  useEffect(()=>{
    if(!state.playing)return
    const timer=window.setTimeout(()=>dispatch({type:'step'}),1600/state.speed)
    return ()=>window.clearTimeout(timer)
  },[state.playing,state.speed,state.stage,state.scenario])
  useEffect(()=>{
    if(state.stage===terminalStage(state.scenario))callback.current(state.scenario,state.sessionId)
  },[state.stage,state.scenario,state.sessionId])
  return {state,dispatch}
}
