declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, any>) => void
  }
}

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, parameters)
  }
}

export const trackGameClick = (gameName: string, platform: string) => {
  trackEvent("game_click", {
    game_name: gameName,
    platform: platform,
  })
}

export const trackExternalLink = (linkName: string, url: string) => {
  trackEvent("external_link_click", {
    link_name: linkName,
    destination_url: url,
  })
}

export const trackFormSubmission = (formName: string) => {
  trackEvent("form_submission", {
    form_name: formName,
  })
}

export const trackDownload = (fileName: string) => {
  trackEvent("file_download", {
    file_name: fileName,
  })
}
