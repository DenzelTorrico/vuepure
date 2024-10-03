<template>
    <div>
        El Total de todo es: {{ total }}
        <button @click="emitir">Clickear</button>
    </div>
</template>


<script setup>

    const props = defineProps({
        total: Number,
        info:Array,
        precio:Number
    })
    console.log(props.info)
    const emit = defineEmits(["tocame"])

    function emitir(){
        emit("tocame", "saludos");
    }

</script>