<template>
    <div class="navbar">
        <ul class="nav ">
            <li class="nav-item">
                <router-link to="/" class="nav-link" aria-current="page">About us</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/galery" class="nav-link" aria-current="page">Galery</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/contact" class="nav-link" aria-current="page">Contact</router-link>
            </li>
        </ul>
    </div>

</template>
  
<script>
export default {
    name: 'NavBarComponents',

}
</script>
<style scoped>
.navbar {
    /* background: rgba(33, 33, 33, 0.51); */
    padding: 10px;
    display: flex;
    justify-content: center;
}
.nav { 
    justify-content: center;
}
.nav-link {
    color: rgb(209, 209, 209);
    font-weight: 600;
    letter-spacing: 3px;
}
.nav-link:hover , .nav-link:focus{
    color: rgb(209, 209, 209);
}


</style>


  