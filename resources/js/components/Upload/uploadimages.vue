<template>
 <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item ">
   
					<!-- Block2 -->
                            <div class="block2">
                                <div class="block2-pic hov-img0">
                                    <img :src="image" alt="IMG-PRODUCT">

                                    <a  class="block2-btn flex-c-m  cl2 size-102 btn btn-outline-danger remove-image-button p-lr-15 trans-04 " @click="remove">
                                        Remove
                                    </a>
                                </div>


                            </div>
				    </div>
</template>

<script>

export default {
props:['image','index'],
methods:{
            remove(){
          //  console.log("remove"+this.index)
            EventBus.$emit("removeUploadImage",this.index)
            }

}

}
</script>

<style scoped>

.remove-image-button{
    border-radius: 25px;
}


</style>