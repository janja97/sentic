<template>
    <div class="footer">
       <div class="container d-flex flex-wrap justify-content-between my-3">
            <div class="col-12  col-sm-6 col-md-4">
                <h3>Apartmani Sentić</h3>
            </div>
            <div class="col-12  col-sm-6 col-md-4">
                <div>Telefon: 063/ 962-137</div>
                <div>Address: Mimoza 64, Neum BiH</div>
            </div>
       </div>
    </div>

</template>
  
<script>
export default {
    name: 'FooterComponents',

}
</script>
<style scoped>
.footer {
    position: relative;
    bottom: 0;
    background-color: #e3e4e4;
    border-top: 1px solid #bbbbbb;
    padding: 10px 0;
}
h3 {
    font-weight: 700;
    color: #727272;
}
div {
    list-style-type: none;
    color: #727272;
}
</style>


  