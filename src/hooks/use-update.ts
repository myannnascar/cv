import type { Update } from '@tauri-apps/plugin-updater'

export const readLastCheckTime = (): number | null => null

export const updateLastCheckTime = (): number => 0

type UpdateInfo = Update | null

export const useUpdate = (_enabled: boolean = true) => {
  return {
    updateInfo: null as UpdateInfo,
    checkUpdate: async () => ({ data: null as UpdateInfo }),
    loading: false,
    lastCheckUpdate: null as number | null,
  }
}
