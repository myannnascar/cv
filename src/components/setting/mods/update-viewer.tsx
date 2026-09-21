import type { Ref } from 'react'
import { useImperativeHandle, useState } from 'react'

import { BaseDialog, DialogRef } from '@/components/base'

export function UpdateViewer({ ref }: { ref?: Ref<DialogRef> }) {
  const [open, setOpen] = useState(false)

  useImperativeHandle(ref, () => ({
    open: () => setOpen(true),
    close: () => setOpen(false),
  }))

  return (
    <BaseDialog
      title=""
      open={open}
      onClose={() => setOpen(false)}
      disableFooter
    />
  )
}
