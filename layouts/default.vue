<script lang="ts" setup>
    
    import {computed} from 'vue';
    import {coreStore} from '../stores/core_store';
    
    const isLoading = computed(()=>{

        return coreStore.isLoading;
    });

</script>

<template>
    <div>
        <CoreLoading v-if="isLoading"/>
        <div v-else>
            <slot/>
        </div>
    </div>

</template>