import JsonVue from 'json-vue-core'
import ContainerVueIview from 'container-vue-iview'
import JsonVueIview from 'json-vue-iview'

JsonVue.use(ContainerVueIview)
JsonVue.use(JsonVueIview)
new JsonVue({
    el: '#app'
})

