<template>
<div>
  <div class="p-l-25 p-r-30 p-lr-0-lg"
  @dragenter="onDragEnter"
                                             @dragleave="onDragLeave"
                                             @dragover.prevent
                                             @drop="onDrop">
                                        <div class="wrap-slick3 flex-sb flex-w"
                                         >


                                            <div class="product-image-uploader"
                                            
                                            >
                                                <p class="text-center"> <ion-icon name="cloud-upload-outline" class="uploadimage"></ion-icon></p>

                                                <div> <h2><p class="text-center">Drag and Drop here</p></h2></div>
                                                <div> <h2><p class="text-center">or</p></h2></div>
                                                <div>

                                                                <div class="input-group mb-3">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text">Upload</span>
                                                            </div>
                                                            <div class="custom-file">
                                                                <input type="file" multiple accept="image/*" class="custom-file-input" id="inputGroupFile01" @change="onFileChange" >
                                                                <label class="custom-file-label" for="inputGroupFile01" @change="onFileChange" >Choose file</label>
                                                                </div>
                                                            </div>

                                                </div>

                                            </div>



                                        </div>

    </div>
<div v-for="(image,index) in images" :key="index">
    <img :src="image">
</div>

</div>
</template>

<script>

export default {
    data(){
        return {
            drag:true,
            files:[],
            images:[]
        }
    },
    methods:{
           onDragEnter(e){
               e.preventDefault()
               console.log('drag Enter')
               this.drag=true
           },
            onDragLeave(e){
                e.preventDefault()
                console.log('drag Leave')
                 this.drag=false
            },
            onFileChange(e)
            {
               // console.log(e.target.files);

                 e.preventDefault();
                e.stopPropagation();
                const files = e.target.files;
               // console.log(files)

                Array.from(files).forEach((file)=>this.addImage(file))

            },
            onDrop(e){
                e.preventDefault();
                e.stopPropagation();
                const files = e.dataTransfer.files;
                console.log(files)

                Array.from(files).forEach((file)=>this.addImage(file))
                   
                // console.log(this.files)
                // console.log(this.images)
               //  console.log("here")


                 EventBus.$emit("imagedraged",this.files)
                 this.files=[]
                
            },
            addImage(file){
                if(!file.type.match('image.*'))
                {
                    console.log(file.name +"Not image")
                    return;
                }
                else{
                        this.files.push(file);

                  // const  reader = new FileReader();
                   //     reader.onload= (e)=>this.images.push(e.target.result);
                    //    reader.readAsDataURL(file);
                    }
            }
    }

}
</script>

<style scoped>

.uploadimage{
     width:100px;
    height:100px;
}



.product-image-uploader{
    height:300px;
    width: 100%;

    background-color: #3498db;
    border: 2px dashed #F0F3F4;
}
.imagedrag{
     background-color: white;
}











</style>