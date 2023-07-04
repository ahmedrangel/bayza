<template>
  <div>
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>
<script>
export default {
  name: "SiteLayout"
};
</script>