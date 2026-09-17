import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: 'Lianmin 服务状态',
  links: [
    { link: 'https://lianmin.pages.dev', label: '博客' },
    { link: 'https://github.com/Lianminx', label: 'GitHub' },
  ],
}
const workerConfig: WorkerConfig = {
  monitors: [{
    id: 'lianmin-blog',
    name: 'Lianmin 个人博客',
    method: 'GET',
    target: 'https://lianmin.pages.dev',
    statusPageLink: 'https://lianmin.pages.dev',
    expectedCodes: [200],
    timeout: 10000,
  }],
}
const maintenances: MaintenanceConfig[] = []
export { maintenances, pageConfig, workerConfig }