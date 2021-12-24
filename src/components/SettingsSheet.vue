<template>
    <v-bottom-sheet v-model="$store.state.settingsSheet.model">
        <v-sheet
            class="text-center"
            height="200px"
        >
            <v-btn
                class="mt-6"
                text
                color="red"
                @click="$store.state.settingsSheet.model = !$store.state.settingsSheet.model"
            >
                close
            </v-btn>
            <div class="py-3">
                This is a bottom sheet using the controlled by v-model instead of activator
            </div>
        </v-sheet>
    </v-bottom-sheet>
</template>

<script>
export default {
    name: 'SettingsSheet',
    data() {
        return {};
    }
};
</script>
