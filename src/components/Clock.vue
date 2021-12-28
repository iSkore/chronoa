<template>
    <v-dialog
        v-model="$store.state.clock.open"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
    >
        <v-card>
            <v-toolbar color="primary">
                <v-btn
                    icon
                    dark
                    @click="$store.state.clock.open = false"
                >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>{{ $store.state.clock.title }}</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <v-subheader>{{ $store.state.clock.description }}</v-subheader>
            <v-divider></v-divider>
            <v-sheet
                height="80vh"
                color="red"
            >
            </v-sheet>
            <v-footer
                app
                height="64px"
            >
                OK
            </v-footer>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'Clock',
    data() {
        return {
            notifications: false,
            sound: true,
            widgets: false
        };
    }
};
</script>
