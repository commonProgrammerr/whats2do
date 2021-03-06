import { lighten } from 'polished'

export default {
  colors: {

    inverse: "#f1f1f2",
    shadow: "#000000",
    overlay: "#090e11",
    success: "#00af9c",
    danger: "#ef697a",
    focus: "#68bbe4",
    highlight: "#00af9c",

    primary: "#d4d5d7",
    primary_strongest: "#fff",
    primary_disabled: "grey",
    
    background: "#20272b",
    background_active: "#1e2529",
    background_deep: "#192023",
    background_deeper: "#1e2528",
    background_hover: "#1e2528",
    background_lighter: "#1e2528",
    header_background: "#2a2f32",
    background_high_emphasis: "#056162",
    background_overlay: "#262d31",
    
    app: {
      background: "#090e11",
      background_deeper: "#090e11",
      background_stripe: "transparent"
    },
    
    text: {
      primary_strong: "#e6eef2",
      secondary_lighter: "#7e98a8",
      
      high_emphasis: "#00a884",
      medium_emphasis: "#7e98a8",
      
      placeholder: lighten(0.15, "#f1f1f260"),
      disabled: "#999"
    },
    
    icon: {
      primary: "#d4d5d7",
      header: "#b1b3b5",
      medium_emphasis: "#7e98a8",
      high_emphasis: "#00a884",
    }
  }
}