<template>
    <h1>{{ dobString }}</h1>

    <div style="margin: 1rem;">
        <v-sheet elevation="4" rounded width="400">
            <section>
                <h2>Age</h2>

                <p>{{ age.years.toHuman() }}</p>
                <p>{{ age.weeks.toHuman() }}</p>
                <p>{{ age.days.toHuman() }}</p>
            </section>
        </v-sheet>
    </div>
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

    const dobString = computed(() => {
        return `DOB: ${dob.value.toFormat('dd/MM/yyyy')}`;
    })

    const age = computed(() => {
        return {
            days:  dob.value.diffNow('days').negate(),
            weeks:  dob.value.diffNow('weeks').negate(),
            years:  dob.value.diffNow('years').negate()
        };
    });
    
</script>