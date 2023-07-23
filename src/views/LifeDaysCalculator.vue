<template>
    {{ dob.toFormat('dd/MM/yyyy') }}

    Age: {{ age.toHuman() }}
</template>

<script lang="ts" setup>
    import { DateTime } from 'luxon';
    import { computed } from 'vue';

    const props = defineProps<{
        year: number,
        month: number,
        day: number
    }>();

    const dob = computed(() => {
        const { year, month, day } = props;

        return DateTime.fromObject({ year, month, day });
    });

    const age = computed(() => {
        return dob.value.diffNow(['years', 'months', 'days']).negate();
    });
    
</script>