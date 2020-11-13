import apiService from './api.service'

const resource = 'example'

const exampleService = {
  getExample: payload =>
    apiService.get(`${resource}?query=${payload}`),
  postExample: payload =>
    apiService.post(`${resource}`, payload),
  patchExample: payload =>
    apiService.patch(`${resource}/${payload.id}`, payload),
  deleteExample: payload =>
    apiService.delete(`${resource}/${payload.id}`),
}

export default exampleService
