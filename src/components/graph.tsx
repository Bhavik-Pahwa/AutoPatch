import { useMemo, useState } from 'react'
import { ReactFlow, Background, Controls, Handle, Position, MarkerType, type NodeProps, type Node } from '@xyflow/react'
import { ArrowRight, Check, CircleDot, Code2, Database, Globe, Maximize2, ScanLine, ShieldCheck, Sparkles, TriangleAlert, Zap } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { stages, type Step } from '@/data/fixtures'
import '@xyflow/react/dist/style.css'
type GraphData={label:string;subtitle:string;state:string;index:number;healing:boolean}
const icons=[Zap,Globe,ScanLine,Database,Code2,ShieldCheck]
function WorkflowNode({data}:NodeProps<Node<GraphData>>){
 const Icon=data.healing?[Zap,TriangleAlert,ScanLine,Sparkles,Code2,ShieldCheck,Database,ArrowRight][data.index]:icons[data.index%icons.length]
 const target=data.healing?(data.index===4?Position.Top:data.index>4?Position.Right:Position.Left):Position.Left
 const source=data.healing?(data.index===3?Position.Bottom:data.index===7?Position.Top:data.index>3?Position.Left:Position.Right):Position.Right
 return <div className={`workflow-node ${data.state} ${data.healing?'healing-node':''}`} title={`${data.label} · ${data.subtitle} · ${data.state}`}><Handle type="target" position={target}/><div className="node-topline"><span className="node-icon"><Icon size={18}/></span><span className="node-number">{String(data.index+1).padStart(2,'0')}</span>{data.state==='complete'&&<Check size={13} className="node-check"/>}</div><strong>{data.label}</strong><span className="node-subtitle">{data.subtitle}</span><div className="node-status"><CircleDot size={10}/>{data.state==='active'?'Current stage':data.state==='complete'?'Completed':data.state==='failed'?'Interrupted':'Pending'}</div><Handle type="source" position={source}/></div>
}
const nodeTypes={workflow:WorkflowNode}
export function WorkflowGraph({steps,active=-1,failed=false,onSelect,healing=false,validationFailed=false,playing=false,expanded=false}:{steps?:Step[];active?:number;failed?:boolean;onSelect?:(index:number)=>void;healing?:boolean;validationFailed?:boolean;playing?:boolean;expanded?:boolean}){
 const [fullscreen,setFullscreen]=useState(false),[focused,setFocused]=useState<number|null>(null)
 const labels=healing?stages:steps?.map(s=>s.title)||[]
 const nodes=useMemo(()=>labels.map((label,index)=>{
   let state=index<active?'complete':index===active?'active':'pending'
   if((!healing&&failed&&index===2)||(healing&&index===1&&active>=1)||(healing&&validationFailed&&index>=5&&active>=5))state='failed'
   if((healing&&active===7)||(!healing&&active>=5&&!failed))state='complete'
   const col=healing?(index<4?index:7-index):index%3
   const row=healing?(index<4?0:1):Math.floor(index/3)
   return {id:String(index),type:'workflow',position:{x:col*240,y:row*235},data:{label,subtitle:healing?['PLAYWRIGHT · SIMULATED','EXCEPTION CAPTURED','DIAGNOSIS · SIMULATED','AGENT · PLANNED','FIXTURE CANDIDATE','SCRIPTED CHECKS','LOCAL VERSION','SCRIPTED RESULT'][index]:`${steps?.[index]?.type.toUpperCase()} · ${steps?.[index]?.duration}`,state,index,healing}}
 }),[labels.join('|'),active,failed,healing,validationFailed,steps])
 const edges=nodes.slice(1).map((node,i)=>({id:`e-${i}`,source:String(i),target:node.id,type:'smoothstep',animated:playing&&active===i+1,style:{stroke:active>i?'#55d6d2':'#354051',strokeWidth:1.5},markerEnd:{type:MarkerType.ArrowClosed,color:active>i?'#55d6d2':'#354051'}}))
 if(healing)edges.push({id:'loop',source:'7',target:'0',type:'smoothstep',animated:playing&&active===7,style:{stroke:'#8b5cf6',strokeWidth:1.5},markerEnd:{type:MarkerType.ArrowClosed,color:'#8b5cf6'}})
 return <><div className={`graph-container ${healing?'healing-graph':''} ${expanded?'expanded-graph':''}`}><ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView fitViewOptions={{padding:0.17}} minZoom={0.35} maxZoom={1.8} nodesDraggable={false} onNodeClick={(_,node)=>{setFocused(Number(node.id));onSelect?.(Number(node.id))}} proOptions={{hideAttribution:true}} colorMode="dark"><Background color="#303948" gap={20} size={1}/><Controls showInteractive={false}/></ReactFlow>{!expanded&&<button className="graph-expand icon-button" aria-label="Expand graph" onClick={()=>setFullscreen(true)}><Maximize2 size={15}/></button>}<span className="canvas-label">INTERACTIVE CANVAS <span>·</span> SCROLL TO ZOOM / DRAG TO PAN</span>{expanded&&focused!==null&&<div className="fullscreen-node-detail"><strong>{labels[focused]}</strong><span>{healing?nodes[focused].data.subtitle:steps?.[focused].action}</span><span>{healing?nodes[focused].data.state:steps?.[focused].expected}</span></div>}</div>{!expanded&&<Dialog open={fullscreen} onOpenChange={setFullscreen}><DialogContent className="graph-dialog"><DialogHeader><DialogTitle>{healing?'Recovery lifecycle':'Workflow canvas'}</DialogTitle><DialogDescription>Simulated workflow · Zoom, pan, or select a step for details.</DialogDescription></DialogHeader><WorkflowGraph steps={steps} active={active} failed={failed} healing={healing} validationFailed={validationFailed} playing={playing} onSelect={onSelect} expanded/></DialogContent></Dialog>}</>
}
