<div id="comment-container"></div>

<script setup>
import { onMounted } from 'vue'
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'

const init = () => {
  const gitalk = new Gitalk({
    clientID: 'Ov23liy5tTrTtelEFxRW',
    clientSecret: '69b0b9330b16efd51affeb9022661c5e94e67cc0',
    repo: 'comment',
    owner: 'caocaoDeng',
    admin:  ['caocaoDeng'],
    id: location.pathname, // Ensure uniqueness and len
    distractionFreeMode: false // Facebook-like distraction
  })
  gitalk.render('comment-container')
}

onMounted(init)
</script>
