<template>
    <NavigationBar />
    <div class="page-layout">
        <div class="page-layout_content">
            <slot />
        </div>
    </div>
</template>

<script>
    import NavigationBar from "@/components/NavigationBar.vue";

    export default {
        components: { NavigationBar }
    };
</script>