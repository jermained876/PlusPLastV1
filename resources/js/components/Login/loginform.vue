<template>
  <div>

     <form action="#" @submit.prevent="create()">
						<h4 class="mtext-105 cl2 txt-center p-b-30">
							Login
						</h4>

						<div class="bor8 m-b-20 how-pos4-parent">
							<input class="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" type="text" name="email" placeholder="Your Email Address" v-model="form.email">
							
						</div>
                        <div class="bor8 m-b-20 how-pos4-parent">
							<input class="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" type="password" name="email" placeholder="Your Password" v-model="form.password">
							
						</div>

						

						<button type="submit" class="flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer">
							Submit
						</button>
					</form>

{{form}}

</div>
</template>

<script>
export default {
    data(){
        return{
            form:{
                email:'kuphal.audra@example.com',
                password:'password'
            }
        }
    },

    methods:{
        create(){
            User.login(this.form)
          // axios.post('/api/auth/login',this.form).then((res)=>console.log(res)).catch()
         //  User.test() 
        }
    }

}
</script>

<style>

</style>
