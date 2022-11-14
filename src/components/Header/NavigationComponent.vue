<template>
    <div>
        <nav class="nav">
            <a  @click="isActive = !isActive" class="logo">
                <img src="../../assets/logo.svg" alt="logo">
            </a>
            <div :class="{ active: isActive }" class="side_nav_wrapper">
                <ul class="side_nav">
                    <a href="#" class="nav_item">
                        <li><img src="../../assets/img/PlayCircle.svg" alt="">Library</li>
                    </a>
                    <a href="#" class="nav_item">
                        <li><img src="../../assets/img/Playlist.svg" alt="">Playlists</li>
                    </a>
                    <a href="#" class="nav_item">
                        <li><img src="../../assets/img//MicrophoneStage.svg" alt="">Artists </li>
                    </a>
                    <a href="#" class="nav_item">
                        <li><img src="../../assets/img/Equalizer.svg" alt="">Equalizer</li>
                    </a>
                    <a href="#" class="nav_item">
                        <li><img src="../../assets/img/VideoCamera.svg" alt="">Video</li>
                    </a>
                </ul>
                <ul class="side_nav">
                    <a href="#" class="nav_item">
                        <li><img src="../../assets/img/Gear.svg" alt="">Settings</li>
                    </a>
                    <a href="#" class="nav_item">
                        <li><img src="../../assets/img/SignOut.svg" alt="">Log out</li>
                    </a>
                </ul>
                <div class="mobile_v_icon">
                    <a href="#">
                        <span class="icon icon-airplayvideo"></span>
                    </a>
                    <a href="#">
                        <span class="icon icon-bell"></span>
                    </a>
                </div>
            </div>
       </nav>
    </div>
</template>

<script>




export default {
    name: 'navigation-component',
    data () {
        return {
        isActive: false,
        }    
    }
}





</script>

<style scoped lang="scss" src="./NavigationComponent.scss">
    
</style>