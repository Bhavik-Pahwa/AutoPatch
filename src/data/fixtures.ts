export type WorkflowStatus = 'Healthy' | 'Attention required' | 'Failed'
export type ScenarioId = 'selector' | 'navigation' | 'relocated' | 'validation'
export interface Step { id: string; title: string; type: string; action: string; expected: string; duration: string }
export interface Workflow { id: string; name: string; target: string; type: string; status: WorkflowStatus; version: string; lastRun: string; recoveries: number; description: string; steps: Step[] }
export interface Execution { id: string; workflowId: string; started: string; duration: string; status: 'Successful' | 'Failed' | 'Recovered'; recoveryId?: string; version: string }
export interface Repair { id: string; workflowId: string; scenario: ScenarioId; accepted: boolean; from: string; to: string; timestamp: string }
export const productSteps: Step[] = [
  { id: 'start', title: 'Initialize workflow', type: 'Trigger', action: 'Begin scheduled task', expected: 'Execution context prepared', duration: '120 ms' },
  { id: 'navigate', title: 'Open product catalog', type: 'Navigation', action: "page.goto('https://catalog.example.com/products')", expected: 'Catalog page loaded', duration: '1.2 s' },
  { id: 'locate', title: 'Locate product grid', type: 'Locator', action: "page.locator('.product-grid')", expected: 'One visible product grid', duration: '340 ms' },
  { id: 'extract', title: 'Extract product data', type: 'Extraction', action: "grid.locator('[data-product]').allTextContents()", expected: '12 product records', duration: '680 ms' },
  { id: 'normalize', title: 'Normalize results', type: 'Transform', action: 'Map records to { name, price, currency }', expected: 'Structured JSON output', duration: '80 ms' },
  { id: 'complete', title: 'Complete execution', type: 'Output', action: 'Return validated result', expected: 'Output prepared', duration: '40 ms' },
]
export const workflows: Workflow[] = [
  { id: 'wf-001', name: 'Product Price Monitor', target: 'catalog.example.com', type: 'Data extraction', status: 'Healthy', version: 'v1.3', lastRun: '09:42', recoveries: 1, description: 'Collect product prices from a fictional e-commerce catalog.', steps: productSteps.map(s => s.id === 'locate' ? { ...s, action: 'page.locator(\'[data-testid="catalog-grid"]\')' } : s) },
  { id: 'wf-002', name: 'Job Listing Extractor', target: 'careers.example.com', type: 'Data extraction', status: 'Attention required', version: 'v1.1', lastRun: '09:38', recoveries: 0, description: 'Collect remote engineering roles from a fictional careers portal.', steps: productSteps.map((s,i) => ({...s, title: ['Initialize workflow','Open careers portal','Navigate to openings','Extract job listings','Normalize listings','Complete execution'][i], action: ['Begin scheduled task',"page.goto('https://careers.example.com')","page.getByRole('link', { name: 'Careers' }).click()","page.locator('[data-job]').allTextContents()", 'Map listings to { title, location }', 'Return validated result'][i], expected: ['Execution context prepared','Careers portal loaded','Open roles page loaded','8 job listings','Structured job records','Output prepared'][i] })) },
  { id: 'wf-003', name: 'Invoice Download Automation', target: 'billing.example.com', type: 'Document retrieval', status: 'Healthy', version: 'v2.0', lastRun: '09:31', recoveries: 0, description: 'Prepare monthly invoices from a fictional billing portal.', steps: productSteps.map((s,i) => ({...s, title: ['Initialize workflow','Open billing portal','Locate invoice table','Select monthly invoices','Prepare downloads','Complete execution'][i], action: ['Begin scheduled task',"page.goto('https://billing.example.com')","page.getByRole('table', { name: 'Invoices' })","table.locator('[data-month=\"October\"]').all()", 'Prepare PDF file references', 'Return download manifest'][i], expected: ['Execution context prepared','Billing portal loaded','Invoice table located','3 monthly invoices','3 PDF references','Download manifest prepared'][i] })) },
  { id: 'wf-004', name: 'Product Availability Checker', target: 'inventory.example.com', type: 'Inventory monitoring', status: 'Failed', version: 'v1.0', lastRun: '09:24', recoveries: 1, description: 'Check product stock levels in a fictional inventory dashboard.', steps: productSteps.map((s,i) => ({...s, title: ['Initialize workflow','Open inventory dashboard','Locate stock table','Read availability','Validate stock values','Complete execution'][i], action: ['Begin scheduled task',"page.goto('https://inventory.example.com')","page.locator('.stock-table')","table.locator('[data-stock]').allTextContents()", 'Assert stock values are numeric', 'Return availability results'][i], expected: ['Execution context prepared','Inventory loaded','Stock table visible','Stock values extracted','Numeric stock values','Output prepared'][i] })) },
]
export const scenarios: Record<ScenarioId, { name: string; workflowId: string; from: string; to: string; before: string; after: string; failure: string; diagnosis: string; validation: string }> = {
  selector: { name: 'Selector Changed', workflowId:'wf-001', from: 'v1.2', to: 'v1.3', before: "page.locator('.product-grid')", after: 'page.locator(\'[data-testid="catalog-grid"]\')', failure: 'Expected selector .product-grid was not found.', diagnosis: 'The product grid moved to a new DOM attribute. The expected selector is unavailable.', validation: '12 product records match the expected output schema.' },
  navigation: { name: 'Navigation Flow Changed', workflowId:'wf-002', from: 'v1.1', to: 'v1.2', before: "page.getByRole('link', { name: 'Careers' }).click()", after: "page.goto('https://careers.example.com/open-roles')", failure: 'The intermediate Careers page is no longer available.', diagnosis: 'The fixture now links directly to open roles; the former intermediate page was removed.', validation: '8 job listings extracted from the alternate navigation path.' },
  relocated: { name: 'Element Relocated', workflowId:'wf-001', from: 'v1.3', to: 'v1.4', before: 'page.locator(\'[data-testid="catalog-grid"]\')', after: 'page.getByRole(\'region\', { name: \'Products\' }).locator(\'[data-testid="catalog-grid"]\')', failure: 'The product grid is now nested within a Products region.', diagnosis: 'An alternative scoped locator is prepared from a predefined DOM fixture.', validation: 'The scoped grid contains all 12 expected records.' },
  validation: { name: 'Validation Failed', workflowId:'wf-004', from: 'v1.0', to: 'v1.1', before: "page.locator('.stock-table')", after: "page.locator('[data-testid=\"inventory-summary\"]')", failure: 'The expected stock table could not be found.', diagnosis: 'A summary element resembles the missing stock table but may not contain item-level data.', validation: 'Rejected: candidate contains summary text, not numeric item-level stock values.' },
}
export const stages = ['Workflow execution','Failure detected','Failure analysis','TinyFish rediscovery','Repair candidate','Validation','Workflow update','Execution resumes']
export function stageMessage(scenario: ScenarioId, stage: number) {
  const s = scenarios[scenario]
  return ['Stored Playwright workflow begins its scripted execution.', s.failure, s.diagnosis, 'Mock browser context inspected; alternative interaction identified. TinyFish integration is planned.', `Fixture candidate prepared: ${s.after}`, s.validation, scenario === 'validation' ? 'Repair rejected. Original version retained; attention required.' : `Simulated repair validated. Local workflow updated: ${s.from} → ${s.to}.`, 'Simulation complete. Workflow resumed in this scripted demonstration.'][stage] || 'Ready to explore the recovery lifecycle.'
}
export const initialRepairs: Repair[] = [
  { id: 'rep-001', workflowId: 'wf-001', scenario: 'selector', accepted: true, from: 'v1.2', to: 'v1.3', timestamp:'2026-10-20T09:40:00' },
  { id: 'rep-002', workflowId: 'wf-004', scenario: 'validation', accepted: false, from: 'v1.0', to: 'v1.1', timestamp:'2026-10-20T09:24:00' },
]
export const initialExecutions: Execution[] = [
  { id:'run-0842', workflowId:'wf-001', started:'2026-10-20T09:42:00', duration:'2.8 s', status:'Successful', version:'v1.3' },
  { id:'run-0841', workflowId:'wf-001', started:'2026-10-20T09:40:00', duration:'18.4 s', status:'Recovered', recoveryId:'rep-001', version:'v1.3' },
  { id:'run-0840', workflowId:'wf-002', started:'2026-10-20T09:38:00', duration:'5.0 s', status:'Failed', version:'v1.1' },
  { id:'run-0839', workflowId:'wf-003', started:'2026-10-20T09:31:00', duration:'4.1 s', status:'Successful', version:'v2.0' },
  { id:'run-0838', workflowId:'wf-004', started:'2026-10-20T09:24:00', duration:'21.2 s', status:'Failed', recoveryId:'rep-002', version:'v1.0' },
  ...Array.from({length:23},(_,i): Execution => ({id:`run-${837-i}`,workflowId:workflows[i%4].id, started:`2026-10-${String(19-Math.floor(i/4)).padStart(2,'0')}T${String(10+i%8).padStart(2,'0')}:30:00`,duration:`${2+i%4}.2 s`,status:i%6===0?'Failed':'Successful',version:workflows[i%4].version}))
]
export const codeSample = `// Illustrative Example — Not Compiler Output
// Fictional test target; never executed by this prototype.
import { test, expect } from '@playwright/test';

test('extract product prices', async ({ page }) => {
  await page.goto('https://catalog.example.com/products');
  const grid = page.locator('[data-testid="catalog-grid"]');
  await expect(grid).toBeVisible();
  const products = await grid.locator('[data-product]')
    .allTextContents();
  expect(products).toHaveLength(12);
});`
