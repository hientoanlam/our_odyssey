<template>
    <div class="w-[85%] h-[9%] justify-center items-center">
        <Capsule
            class="absolute cursor-pointer w-[20%] hover:drop-shadow-[0_0_0.25rem_rgba(255,255,255,0.5)] transition duration-300"
            v-for="(capsule, index) in capsules"
            :key="index"
            :color="capsule.color"
            :style="capsule.style"
            @click="$emit('capsule-clicked', index, capsule.color)"
        />
    </div>
</template>

<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue';
    import Capsule from '@/components/ui/Capsule.vue';

    const W = 200;
    const H = 200;
    //let sY = [0, -12, -15, -13, 0]
    let sY = Array.from({ length: 6 }, (_, index) => {
        if (index === 0 || index === 5) {
            // Rule for the first and last elements
            return Math.floor(Math.random() * 3);
        } else {
            // Rule for the rest of the elements
            return (-1)*(Math.floor(Math.random() * 2) + 12);
        }
    });
    let sX = 0;
    const capsules = ref([]);

    const initializeCapsules = () => {
    // Fetch capsule data from the database
    // and populate the capsules array
    // Simulating fetching capsules from the database
    // Replace this with your actual logic
        capsules.value = Array.from({ length: 56 }).map((_, index) => {
            const color = getRandomColor();
            const position = getRandomPosition(index);
            const zIndex = getRandomZIndex();
            return {
                color,
                x: position.x,
                y: position.y,
                style: `transform: rotate(${position.r}deg); bottom: ${position.y + 20}px; left: ${position.x+30}px; z-index: ${zIndex}`,
            };
        });
    };

    const getRandomColor = () => {
        const colors = ['yellow', 'blue', 'green', 'coral', 'purple'];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    const getRandomPosition = (index) => {
        let x = 0;
        let y = Math.floor(Math.random() * 8) + 15;
        let r = Math.floor(Math.random() * 13) - 7;

        const i = index % 6;
        const j = Math.floor(index / 6);

        if (j === 0) {
            r = Math.floor(Math.random() * 8);
            console.log(r);
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
            sX = 210;
        }
        else {
            x = Math.random() * 10 + 42;
        }
        
        sX += x;
        sY[i] += y;
        return { x: sX, y: sY[i], r: r };
    };

    const getRandomRotation = () => Math.floor(Math.random() * 13) - 7;
    
    const getRandomZIndex= () => Math.floor(Math.random() * 9);

    const getRandomVelocity = () => (Math.random() - 0.5) * 5;

    const updatePositions = () => {
    for (let i = 0; i < capsules.value.length; i++) {
        const capsule = capsules.value[i];
        capsule.x += capsule.dx;
        capsule.y += capsule.dy;
        if (capsule.y > H) {
            // Reset capsule position when it reaches the bottom of the bottle
            const position = getRandomPosition();
            capsule.x = position.x;
            capsule.y = position.y;
            capsule.dx = getRandomVelocity();
            capsule.dy = getRandomVelocity();
        }
    }
    };

    const handleCollisions = () => {
        for (let i = 0; i < capsules.value.length; i++) {
            const capsuleA = capsules.value[i];
            for (let j = i + 1; j < capsules.value.length; j++) {
            const capsuleB = capsules.value[j];
            if (checkCollision(capsuleA, capsuleB)) {
                resolveCollision(capsuleA, capsuleB);
            }
            }
        }
    };

    const checkCollision = (capsuleA, capsuleB) => {
        const rSum = capsuleA.width / 2 + capsuleB.width / 2;
        const dx = capsuleB.x - capsuleA.x;
        const dy = capsuleB.y - capsuleA.y;
        return rSum * rSum > dx * dx + dy * dy;
    };

    const resolveCollision = (capsuleA, capsuleB) => {
        const relVelX = capsuleB.dx - capsuleA.dx;
        const relVelY = capsuleB.dy - capsuleA.dy;
        const normX = capsuleB.x - capsuleA.x;
        const normY = capsuleB.y - capsuleA.y;
        const mag = Math.sqrt(normX * normX + normY * normY);
        const norm = { x: normX / mag, y: normY / mag };

        const velAlongNorm = relVelX * norm.x + relVelY * norm.y;
        if (velAlongNorm > 0) return;

        const bounce = 0.7;
        const j = -(1 + bounce) * velAlongNorm;
        const impulse = { x: j * norm.x, y: j * norm.y };
        capsuleA.dx -= 1 / capsuleA.width * impulse.x;
        capsuleA.dy -= 1 / capsuleA.width * impulse.y;
        capsuleB.dx += 1 / capsuleB.width * impulse.x;
        capsuleB.dy += 1 / capsuleB.width * impulse.y;
    };

    onMounted(() => {
        initializeCapsules();

        const animate = () => {
            updatePositions();
            handleCollisions();
            requestAnimationFrame(animate);
        };
    });

    onBeforeUnmount(() => {
    // Clean up any necessary resources here
    });
</script>

<style scoped>
</style>