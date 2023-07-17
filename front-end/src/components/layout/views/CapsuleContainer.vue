<template>
    <div ref="container" class="w-[85%] h-[9%] justify-center items-center">
        <Capsule
            class="absolute cursor-pointer w-[20%] hover:drop-shadow-[0_0_0.25rem_rgba(255,255,255,0.5)] transition duration-300"
            v-for="capsule in capsules"
            :key="capsule.key"
            :color="capsule.color"
            :style="capsule.style"
            @click="$emit('capsule-clicked', capsule.key, capsule.color)"
        />
    </div>
</template>

<script setup>
    import { ref, onMounted, onBeforeUnmount, nextTick} from 'vue';
    import Capsule from '@/components/ui/Capsule.vue';
    import { getDatabase, ref as dbRef, onValue } from 'firebase/database';
    const db = getDatabase();

    const capsules = ref([]);
    const container = ref(null);
    const totalContainerHeight = ref(0);
    const totalContainerWidth = ref(0);

    const initializeCapsules = () => {
        const capsulesRef = dbRef(db, 'luminaelixir/jar/capsules');
        const colors = ['yellow', 'blue', 'green', 'coral', 'purple'];
        onValue(capsulesRef, (snapshot) => {
            let sY = Array.from({ length: 6 }, (_, index) => {
                if (index === 0 || index === 5) {
                    // Rule for the first and last elements
                    return Math.floor(Math.random() * 3);
                } else {
                    // Rule for the rest of the elements
                    return (-1)*(Math.floor(Math.random()) + 3);
                }
            });
            let sX = 0;
            const getRandomColor = () => {
                return colors[Math.floor(Math.random() * colors.length)];
            };
            const getRandomPosition = (index) => {
                let x = 0;
                let y = Math.random() * 2 + 3;
                let r = Math.floor(Math.random() * 13) - 7;

                const i = index % 6;
                const j = Math.floor(index / 6);

                if (j === 0) {
                    r = Math.floor(Math.random() * 8);
                    if (i === 0 || i === 1)
                        r *= 1;
                    else if (i === 2 || i === 3)
                        r = Math.floor(Math.random() * 3) - 1;
                    else
                        r *= -1;
                }
                
                if (i === 0) {
                    sX = 0;
                }
                else if (i === 5) {
                    sX = 65;
                }
                else {
                    x = Math.random() * 3 + 12;
                }
                
                sX += x;
                sY[i] += y;
                return { x: sX, y: sY[i], r: r };
            };
            const getRandomZIndex= () => Math.floor(Math.random() * 9);
            const data = snapshot.val();
            if (data) {
                const shuffledData = Object.entries(data)
                    .map(([key, { type }]) => ({ key, type }))
                    .sort(() => Math.random() - 0.5);

                capsules.value = shuffledData.map((capsule, index) => {
                    const color = colors[capsule.type];
                    const position = getRandomPosition(index);
                    const bottomPercentage = (position.y + 4);
                    const leftPercentage = (position.x + 7);
                    const zIndex = getRandomZIndex();
                    return {
                    key: capsule.key,
                    color,
                    style: `transform: rotate(${position.r}deg); bottom: ${bottomPercentage}%; left: ${leftPercentage}%; z-index: ${zIndex}`,
                    };
                });
            }
        });
    };
    
    onMounted(() => {
        initializeCapsules();
        // const animate = () => {
        //     updatePositions();
        //     handleCollisions();
        //     requestAnimationFrame(animate);
        // };
    });

    onBeforeUnmount(() => {
    });
</script>

<style scoped>
</style>