import { sendGAEvent } from "@next/third-parties/google"

// Custom event tracking functions
export const trackGameClick = (gameName: string, platform: string) => {
  sendGAEvent("event", "game_click", {
    game_name: gameName,
    platform: platform,
    value: 1,
  })
}

export const trackExternalLink = (linkName: string, destination: string) => {
  sendGAEvent("event", "external_link_click", {
    link_name: linkName,
    destination: destination,
    value: 1,
  })
}

export const trackContactFormSubmit = () => {
  sendGAEvent("event", "contact_form_submit", {
    form_name: "contact_form",
    value: 1,
  })
}

export const trackCVDownload = () => {
  sendGAEvent("event", "cv_download", {
    document_type: "cv",
    value: 1,
  })
}

export const trackSectionView = (sectionName: string) => {
  sendGAEvent("event", "section_view", {
    section_name: sectionName,
    value: 1,
  })
}
