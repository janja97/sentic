<template>
  <div class="container">
    <div class="d-flex flex-wrap">
      <div class="col-12 py-3 py-lg-5" v-for="(apartman, index) in apartmans" :key="index">
        <!-- Button trigger modal -->
        <button type="button" class="card" data-bs-toggle="modal" :data-bs-target="'#exampleModal' + index" >
          <div class="d-flex align-items-center flex-wrap">
            <div class="col-12 col-lg-6 order-2 order-lg-1 h-100">
              <img :src="apartman.image" :alt="apartman.image">
            </div>
            <div class="content p-4 p-lg-5 col-12 col-lg-6 order-1 order-lg-2">
              <h4>{{ apartman.ime }}</h4>
              <p>{{ apartman.text }}</p>
            </div>
          </div>
        </button>

        <!-- Modal -->
        <div :id="'exampleModal' + index" class="modal fade" tabindex="-1" :aria-labelledby="'exampleModalLabel' + index" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title" :id="'exampleModalLabel' + index">{{ apartman.ime }}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div :id="'carouselExample' + index" class="carousel slide">
                  <div class="carousel-inner">
                    <div class="carousel-item" :class="{ 'active': i === 0 }" v-for="(image, i) in apartman.images" :key="i">
                      <img :src="image.UrlImg" :alt="image.alt" class="d-block w-100 image">
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" :data-bs-target="'#carouselExample' + index" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" :data-bs-target="'#carouselExample' + index" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'GaleryPage',
  data() {
    return {
      // images array
      apartmans: [
        {
          ime: "A2",
          text: "Idealno smješten uz obalu, nudi prostranu spavaću sobu, udoban dnevni boravak, kuhinju i WC. Savršen za opuštajući boravak četiri osobe, uz lak pristup moru i bez stepenica",
          image: "/A2/A2 (3).jpg",
          images: [
            { id: '1', UrlImg: '/A2/A2 (1).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A2/A2 (2).jpg', alt: 'image-slug' },
            { id: '2', UrlImg: '/A2/A2 (3).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A2/A2 (4).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A2/A2 (5).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A2/A2 (6).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A2/A2 (7).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A2/A2 (8).jpg', alt: 'image-slug' },
          ],
        },
        {
          ime: "A3",
          text: "Udaljen samo nekoliko koraka od obale, idealan za tri osobe.Prostrana terasa s predivnim pogledom na more. Savršeno mjesto za opuštanje i uživanje.",
          image: "/A3/A3 (1).jpg",
          images: [
            { id: '1', UrlImg: '/A3/A3 (1).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A3/A3 (2).jpg', alt: 'image-slug' },
            { id: '2', UrlImg: '/A3/A3 (3).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A3/A3 (4).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A3/A3 (5).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A3/A3 (6).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A3/A3 (7).jpg', alt: 'image-slug' },
            // { id: '5', UrlImg: '/A3/A3 (8).jpg', alt: 'image-slug' },
          ],
        },
        {
          ime: "A4",
          text: "Idealan za četvero gostiju, prostrani jednostavan prostor s kuhinjom i privatnim WC-om. Uživajte u impresivnom pogledu na more iz udobnosti ovog apartmana",
          image: "/A4/A4 (1).jpg",
          images: [
            { id: '1', UrlImg: '/A4/A4 (1).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A4/A4 (2).jpg', alt: 'image-slug' },
            { id: '2', UrlImg: '/A4/A4 (3).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A4/A4 (4).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A4/A4 (5).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A4/A4 (6).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A4/A4 (7).jpg', alt: 'image-slug' },
            // { id: '5', UrlImg: '/A4/A4 (8).jpg', alt: 'image-slug' },
          ],
        },
        {
          ime: "A5",
          text: "Prostran za četiri osobe s jednom spavaćom sobom, dnevnim boravkom s kuhinjom i prekrasnim pogledom na more. Potpuno opremljen za udoban i opuštajući boravak.",
          image: "/A5/A5 (1).jpg",
          images: [
            { id: '1', UrlImg: '/A5/A5 (1).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A5/A5 (2).jpg', alt: 'image-slug' },
            { id: '2', UrlImg: '/A5/A5 (3).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A5/A5 (4).jpg', alt: 'image-slug' },
            // { id: '5', UrlImg: '/A5/A5 (5).jpg', alt: 'image-slug' },
            // { id: '5', UrlImg: '/A5/A5 (6).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A5/A5 (7).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A5/A5 (8).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A5/A5 (9).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A5/A5 (10).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A5/A5 (11).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A5/A5 (12).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A5/A5 (13).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A5/A5 (14).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A5/A5 (15).jpg', alt: 'image-slug' },
          ],
        },
        {
          ime: "A6",
          text: "Prostran za četiri osobe s jednom spavaćom sobom, dnevnim boravkom s kuhinjom i prekrasnim pogledom na more. Potpuno opremljen za udoban i opuštajući boravak.",
          image: "/A6/A6 (1).jpg",
          images: [
            { id: '1', UrlImg: '/A6/A6 (1).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A6/A6 (2).jpg', alt: 'image-slug' },
            { id: '2', UrlImg: '/A6/A6 (3).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A6/A6 (4).jpg', alt: 'image-slug' },  
            { id: '5', UrlImg: '/A6/A6 (5).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A6/A6 (6).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A6/A6 (7).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A6/A6 (8).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A6/A6 (9).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A6/A6 (10).jpg', alt: 'image-slug' },
            // { id: '5', UrlImg: '/A6/A6 (11).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A6/A6 (12).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A6/A6 (13).jpg', alt: 'image-slug' },
          ],
        },
        // {
        //   ime: "A7",
        //   text: "text ovdje neki mali",
        //   image: "/A7/A7 (1).jpg",
        //   images: [
        //     { id: '1', UrlImg: '/A7/A7 (1).jpg', alt: 'image-slug' },
        //     { id: '5', UrlImg: '/A7/A7 (2).jpg', alt: 'image-slug' },
        //     { id: '2', UrlImg: '/A7/A7 (3).jpg', alt: 'image-slug' },
        //     { id: '3', UrlImg: '/A7/A7 (4).jpg', alt: 'image-slug' },  
        //     { id: '5', UrlImg: '/A7/A7 (5).jpg', alt: 'image-slug' },
        //     { id: '5', UrlImg: '/A7/A7 (6).jpg', alt: 'image-slug' },
        //     { id: '5', UrlImg: '/A7/A7 (7).jpg', alt: 'image-slug' },
        //     { id: '3', UrlImg: '/A7/A7 (8).jpg', alt: 'image-slug' },
        //     { id: '5', UrlImg: '/A7/A7 (9).jpg', alt: 'image-slug' },
        //     { id: '5', UrlImg: '/A7/A7 (10).jpg', alt: 'image-slug' },
        //     { id: '5', UrlImg: '/A7/A7 (11).jpg', alt: 'image-slug' },
        //   ],
        // },
        {
          ime: "A8",
          text: "Direktan pogled na more, vanjska kuhinja za cjelodnevno uživanje. Sadrži spavaću sobu, privatni WC i pogodan je za 4 osobe. Idealno mjesto za opuštanje uz prekrasan pogled na more.",
          image: "/A8/A8 (7).jpg",
          images: [
            { id: '3', UrlImg: '/A8/A8 (8).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A8/A8 (13).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A8/A8 (9).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A8/A8 (10).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A8/A8 (11).jpg', alt: 'image-slug' },
            { id: '2', UrlImg: '/A8/A8 (3).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A8/A8 (7).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A8/A8 (4).jpg', alt: 'image-slug' },  
            { id: '1', UrlImg: '/A8/A8 (1).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A8/A8 (2).jpg', alt: 'image-slug' },
          ],
        },
        {
          ime: "A9",
          text: " Direktan pogled na more, vanjska kuhinja za uživanje. Sadrži spavaću sobu, privatni WC i idealan je za 2 osobe. Savršeno mjesto za romantični odmor uz prekrasan pogled na more.",
          image: "/A9/A9 (4).jpg",
          images: [
            { id: '5', UrlImg: '/A9/A9 (5).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A9/A9 (6).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A9/A9 (7).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A9/A9 (8).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A9/A9 (9).jpg', alt: 'image-slug' },
            { id: '2', UrlImg: '/A9/A9 (3).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A9/A9 (12).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A9/A9 (4).jpg', alt: 'image-slug' },  
            { id: '5', UrlImg: '/A9/A9 (10).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A9/A9 (11).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A9/A9 (13).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A9/A9 (2).jpg', alt: 'image-slug' },
            { id: '1', UrlImg: '/A9/A9 (1).jpg', alt: 'image-slug' },

          ],
        },
        {
          ime: "A10",
          text: "Savršen za 2 osobe s terasom, privatnim WC-om i kuhinjom. Uživajte u blizini mora za opušteni odmor.",
          image: "/A10/A10 (12).jpg",
          images: [
            { id: '2', UrlImg: '/A10/A10 (3).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A10/A10 (5).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A10/A10 (9).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A10/A10 (15).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A10/A10 (12).jpg', alt: 'image-slug' },
            { id: '1', UrlImg: '/A10/A10 (13).jpg', alt: 'image-slug' },
            { id: '1', UrlImg: '/A10/A10 (1).jpg', alt: 'image-slug' },
          ],
        },
        {
          ime: "A11",
          text: "Savršen za 2 osobe s terasom, privatnim WC-om i kuhinjom. Uživajte u blizini mora za opušteni odmor.",
          image: "/A11/A11 (1).jpg",
          images: [
            { id: '1', UrlImg: '/A11/A11 (9).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A11/A11 (8).jpg', alt: 'image-slug' },
            { id: '2', UrlImg: '/A11/A11 (1).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A11/A11 (5).jpg', alt: 'image-slug' },  
            { id: '5', UrlImg: '/A11/A11 (4).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A11/A11 (6).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A11/A11 (7).jpg', alt: 'image-slug' },
          ],
        },
        {
          ime: "A12",
          text: "Savršen za 3 osobe s terasom, privatnim WC-om i kuhinjom. Uživajte u blizini mora za opušteni odmor.",
          image: "/A12/A12 (8).jpg",
          images: [
            { id: '1', UrlImg: '/A12/A12 (4).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A12/A12 (3).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A12/A12 (1).jpg', alt: 'image-slug' },  
            { id: '5', UrlImg: '/A12/A12 (8).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A12/A12 (11).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A12/A12 (12).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A12/A12 (6).jpg', alt: 'image-slug' },
          ],
        },
        {
          ime: "A13",
          text: "Savršen za 3 osobe s terasom, privatnim WC-om i kuhinjom. Uživajte u pogledu za opušteni odmor.",
          image: "/A13/A13 (5).jpg",
          images: [
            { id: '1', UrlImg: '/A13/A13 (1).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A13/A13 (5).jpg', alt: 'image-slug' },
            { id: '2', UrlImg: '/A13/A13 (6).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A13/A13 (7).jpg', alt: 'image-slug' },  
            { id: '5', UrlImg: '/A13/A13 (3).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A13/A13 (8).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A13/A13 (9).jpg', alt: 'image-slug' },
          ],
        },
      ]
    };
  }
}
</script>

<style scoped>
.container {
  margin-top: 70px;
  margin-bottom: 70px;
}
.card {
  border: none !important;
  border: 1px solid rgb(154, 154, 154);
  padding: 0px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-attachment: blue;
  /* background-image: linear-gradient(to right bottom, #83b0e1, #8bb5e3, #93bae5, #9bbfe7, #a3c4e9, #aecaeb, #b8d0ed, #c2d6ef, #d0def2, #dee7f5, #ebf0f8, #f8f9fb); */
  box-shadow: 7px -3px 59px 0px rgba(212,224,241,0.99) inset;
  -webkit-box-shadow: 7px -3px 59px 0px rgba(212,224,241,0.99) inset;
  -moz-box-shadow: 7px -3px 59px 0px rgba(212,224,241,0.99) inset;  /* height: 300px; */
  box-shadow: 7px -3px 59px 0px rgba(212,224,241,0.99) ;
  -webkit-box-shadow: 7px -3px 59px 0px rgba(212,224,241,0.99) ;
  -moz-box-shadow: 7px -3px 59px 0px rgba(212,224,241,0.99) ;  /* height: 300px; */

}
.card img {
  border-radius: 10px 0 0 10px;
  width: 100%;
  height: 100%;
  filter: brightness(0.9);
  object-fit: cover;
}
.card img:hover {
  filter: brightness(1); 
}

.card .content h4 {
  color: #001d3d!important;
  font-size: 36px;
  font-weight: 800;
}
.card .content p{
  font-size: 18px;
  line-height: 34px;
  color: #001d3d!important;

}


/* modal */
.modal-title {
  font-size: 32px;
  font-weight: 800;
  letter-spacing: 3px;
  color: rgb(115, 115, 115) !important;
}
.image {
  border-radius: 10px;
}
@media screen and (max-width:991.5px ) {
  .card img  {
    border-radius: 0 0 10px 10px;
    height: auto;
  }
}
@media screen and (max-width:768.5px ) {
  
  .card .content p{
    font-size: 18px;
    line-height: 28px;

  }
  .modal-dialog {
    padding: 0;
    margin: 0;
    border-radius: 0px;
  }
}
</style>
