<template>
    <div class="wrapper">
        <div class="contact">
            <h1 class="contact__header">Contact Form</h1>
            <div class="contact__map">
                <div id="map">
                    <yandex-map  v-if="dataLoaded"
                            :coords="[59.959659, 30.294716]"
                            zoom="17"
                            style="width: 100%; height: 100%;"
                            :cluster-options="{
									1: {clusterDisableClickZoom: true}
								  }"
                            :behaviors="['ruler']"
                            :placemarks="placemarks"
                            map-type="map"
                    >
                        <ymap-marker
                                marker-id="1"
                                marker-type="placemark"
                                :coords="[59.959659, 30.294716]"
                        ></ymap-marker>
                    </yandex-map>
                </div>
            </div>
            <div class="contact__form">
                <v-form></v-form>
            </div>
        </div>

    </div>
</template>

<script>
    import { yandexMap, ymapMarker } from 'vue-yandex-maps'
    export default {
        data () {
            return {
                dataLoaded: false,
                placemarks: [
                    {
                        markerId: '1',
                    }
                ]
            }
        },
        mounted () {
            this.dataLoaded = true
        },
        components: {
            yandexMap,
            ymapMarker
        }
    }
</script>