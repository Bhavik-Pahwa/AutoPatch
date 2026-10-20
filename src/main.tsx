import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MotionConfig } from 'motion/react'
import { Toaster } from 'sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Layout } from '@/components/layout'
import './index.css'
const Overview=lazy(()=>import('@/pages/dashboard').then(m=>({default:m.Overview})))
const Dashboard=lazy(()=>import('@/pages/dashboard').then(m=>({default:m.Dashboard})))
const Registry=lazy(()=>import('@/pages/workflows').then(m=>({default:m.Registry})))
const Studio=lazy(()=>import('@/pages/workflows').then(m=>({default:m.Studio})))
const WorkflowInspector=lazy(()=>import('@/pages/workflows').then(m=>({default:m.WorkflowInspector})))
const Healing=lazy(()=>import('@/pages/healing').then(m=>({default:m.Healing})))
const RepairInspector=lazy(()=>import('@/pages/healing').then(m=>({default:m.RepairInspector})))
const Executions=lazy(()=>import('@/pages/system').then(m=>({default:m.Executions})))
const Architecture=lazy(()=>import('@/pages/system').then(m=>({default:m.Architecture})))
const NotFound=lazy(()=>import('@/pages/system').then(m=>({default:m.NotFound})))

ReactDOM.createRoot(document.getElementById('root')!).render(
 <React.StrictMode><MotionConfig reducedMotion="user"><TooltipProvider><BrowserRouter><Suspense fallback={<div className="not-found" role="status"><span className="mono purple">PREPARING YOUR WORKSPACE…</span></div>}><Routes><Route element={<Layout/>}>
 <Route index element={<Overview/>}/><Route path="dashboard" element={<Dashboard/>}/><Route path="workflows" element={<Registry/>}/><Route path="workflows/new" element={<Studio/>}/><Route path="workflows/:id" element={<WorkflowInspector/>}/><Route path="healing" element={<Healing/>}/><Route path="healing/:id" element={<RepairInspector/>}/><Route path="executions" element={<Executions/>}/><Route path="architecture" element={<Architecture/>}/><Route path="*" element={<NotFound/>}/>
 </Route></Routes></Suspense></BrowserRouter><Toaster theme="dark" position="bottom-right" richColors/></TooltipProvider></MotionConfig></React.StrictMode>
)
