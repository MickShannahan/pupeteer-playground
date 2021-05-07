import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  imageResults: {
    downloadedImages: [],
    failedImages: [],
    message: null,
    found: 0
  },
  styleResults: {
    colors: []
  },
  error: null,
  loading: null,
  working: false,
  actionQue: [],
  socketUser: '',
  socketRoom: ''
})
