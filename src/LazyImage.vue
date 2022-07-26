<template>
    <img ref="image" >
</template>

<script>
export default {
    props: {
        origin: String
    },
    data() {
        return {
            observer: null
        }
    },
    mounted() {
    this.initObserver()
    },
    methods: {
        initObserver() {
            this.observer = new IntersectionObserver((entries,observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        observer.unobserve(entry.target)
                        
                        let image = new Image()
                        // image.src = resizedImageURI() // 리사이징 된 이미지의 주소 반환
                        image.onload = () => {
                            this.$refs.image.src = image.src // IE는 object-fit이 적용되지 않기때문에, IE의 경우, backgroundImage로 스타일링
                        }
                        
                        image.onerror = async error => {console.log(error);} // 이미지를 가져오는데 실패하는 경우에 서버에게 이 사실을 알려, 이미지 복원 처리를 수행함.
                        
                        image = null // GARBAGE COLLECTION : 이 부분이 성능적으로 개선을 주는지에 대하여는 검증하지 못했음
                    }
                })
            },{
                rootMargin: '50%'// Intersect 시점을 View port 밖 50%에 위치하는 지점으로 설정
            })
            Array.from([this.$refs.image]).forEach(image => {
                this.observer.observe(image)
            })
        }
    },
    beforeUnmount() {
        if(this.observer !== null) {
            this.observer.disconnect() // 컴포넌트가 소멸하기 전, 모든 IntersectionObserver를 비활성화한다.
        }
    }
    
}
</script>