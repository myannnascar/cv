use crate::singleton;
use std::sync::atomic::{AtomicBool, Ordering};

pub struct SilentUpdater {
    update_ready: AtomicBool,
}

singleton!(SilentUpdater, SILENT_UPDATER);

impl SilentUpdater {
    const fn new() -> Self {
        Self {
            update_ready: AtomicBool::new(false),
        }
    }

    pub fn is_update_ready(&self) -> bool {
        self.update_ready.load(Ordering::Acquire)
    }
}

impl SilentUpdater {
    pub async fn try_install_on_startup(&self, _app_handle: &tauri::AppHandle) -> bool {
        false
    }
}

impl SilentUpdater {
    pub async fn start_background_check(&self, _app_handle: tauri::AppHandle) {}
}
