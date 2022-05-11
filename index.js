import template from './template'

// fetch and schedule events
// worker responds to fetch event
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

// async function handleRequest(request) {
//   return new Response(template(request.cf), {
//     headers: { 'content-type': 'text/html' },
//   })
// }

async function handleRequest(request) {
  return new Response(template(request.cf), {
    headers: { 'content-type': 'text/html' },
  })
}

