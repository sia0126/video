const items = document.querySelectorAll('article')
const $body = document.querySelector('body')
const $aside = document.querySelector('aside')
const colseBtn = document.querySelector('.colseBtn')

console.log(items)

// for(초기값; 조건; 증감식){ 실행구 }
// for(배역의 아이템 of 배열명){ 실행구 }

for(let item of items){  // 각각의 article(item)에 적용
  item.addEventListener('click', ()=>{
    window.scrollTo(0,0)
    // console.log(e.currentTarget) 내가 클릭한 부분의 노드

    let title = e.currentTarget.querySelector('h2').innerText
    let description = e.currentTarget.querySelector('p').innerText
    //let vid = e.currentTarget.querySelector('video').getAttribute('src')
    let vid = e.currentTarget.querySelector('video').src
    console.log(vid)

    $aside.querySelector('h2').innerText = title
    $aside.querySelector('p').innerText = description
    //$aside.querySelector('video').setAttribute('src',vid)
    $aside.querySelector('video').src = vid

    $body.classList.add('on') // body에 on클라스 적용 -> aside가 튀어나옴
  })

  item.addEventListener('mouseenter', (e)=>{
    e.currentTarget.querySelector('video').play()
  })

  item.addEventListener('mouseleave', (e)=>{
    e.currentTarget.querySelector('video').pause()
  })
}

// aside안의 close 버튼
colseBtn.addEventListener('click', () => {
  $body.classList.remove('on')
  $aside.querySelector('video').pause()
})