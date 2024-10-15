const pageConfig = {
  title: "lyc8503's Status Page",
  links: [
    { link: 'https://q1sj.cn/', label: 'Blog' },
    { link: 'https:/alist.q1sj.cn', label: 'Alist' },
    { link: 'mailto:root@q1sj.cn', label: 'Email Me', highlight: true },
  ],
}
type MonitorState = {
  lastUpdate: number
  overallUp: number
  overallDown: number
  incident: Record<
    string,
    {
      start: number[]
      end: number | undefined // undefined if it's still open
      error: string[]
    }[]
  >

  latency: Record<
    string,
    {
      recent: {
        loc: string
        ping: number
        time: number
      }[] // recent 12 hour data, 2 min interval
      all: {
        loc: string
        ping: number
        time: number
      }[] // all data in 90 days, 1 hour interval
    }
  >
}

type MonitorTarget = {
  id: string
  name: string
  method: string // "TCP_PING" or Http Method (e.g. GET, POST, OPTIONS, etc.)
  target: string // url for http, hostname:port for tcp
  tooltip?: string
  statusPageLink?: string
  checkLocationWorkerRoute?: string

  // HTTP Code
  expectedCodes?: number[]
  timeout?: number
  headers?: Record<string, string | undefined>
  body?: BodyInit
  responseKeyword?: string
}

export type { MonitorState, MonitorTarget }
