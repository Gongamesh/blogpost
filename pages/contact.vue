<script setup lang="ts">
</script>

<template>
    <main>
     <div class="grid lg:grid-rows-2 mr-20 mt-10 justify-center">
        <div class="grid lg:grid-cols-2 gap-5">
            <CardContact class="w-[500px] h-[400px]" title="General enquiries!" description="Want to discuss your business ideas? Our team will be delighted to assist you."  content="enquiries@blogger.com" buttonText="Contact us" contact="enquiries" />
            <CardContact class="w-[500px] h-[400px]" title="Speak to support!" description="Available 24/7. Save yourself time and talk to us online."  content="support@blogger.com" buttonText="Get support" contact="support" />
            <CardContact class="w-[500px] h-[400px]" title="Feature request!" description="Share your ideas on new features. Lets make Blogger even better product."  content="features@blogger.com" buttonText="Feature request" contact="features" /> 
            <CardContact class="w-[500px] h-[400px]" title="Partner with us!" description="Interested in becoming a partner with Blogger? We will happily assign you a partner manager."  content="partners@blogger.com" buttonText="Become a partner" contact="partners"/> 
        </div>
    </div>       
    </main>
</template>