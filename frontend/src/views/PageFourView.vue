<script setup>
import { computed, onMounted, ref } from "vue"
import { useRouter } from "vue-router";

const router = useRouter()

const teams = [
    {
        parent:'Chiefs',
        children:[
            {
                role:'Main',
                members:[
                    {
                        name:'B.GANDHI NAIDU',
                        image:'https://previews.dropbox.com/p/thumb/ACJr2nCMtHI6PayKZyAvfF7Tr-9DDf78GD_jdo1A1Io6W1As2e-2_5VRuFxuFY13BNOWTFYfvxrUaesyBDYL_RcZLsgvPDaINi_i3DGL_K9tseETgqTaws9SwzWfpcQky3dMtEb__3lf3BsoEVPSY_N9YejL1PtYH9T-bMmJ6ferd-4weW3YW0QZh2mn7bmnO4tAmui63as2a577llNLW8GhVeL1G29x3XcMOAfwNo7Z4Is8xUywcF9O25wPufEq1g8MP4YqFx6XVjIRaV86vQSAa0EFHqc4X9zqgIZodQ5X6PdkuM4wITnOBKawv2n0KXLyPd8aIGz2zkzirMQTtbuM/p.jpeg',
                    }
                    
                ]
            },
        ]
    },
    {
        parent:"Associate Chief's",
        children:[
            {
                role:'',
                members:[
                {
                        name:'L.HARSHA',
                        image:'https://previews.dropbox.com/p/thumb/ACLUTqy5z0CFNwpoQuiwGOvWbU1c3AUegCIYcrR5ZuHCQ2bFjzYHe4paVwf71xrP4kFGgPF4XQC-lLvl43_C1SkVU3Z_rCUNt_ydPzW338vBaxFEul2YjqmpYqpP3EW2dBfR49w7a7zNtM3Lqqz8DMokPi0J0Epm2S7IR6dPwUH4GjXU_DP8zKhtw2KfsG8NWuJ1bnY_XRDyzSgWVn55TCLPGZPDuR7zXFRMIaqho-Y0q-NWbQyqGttkI-js1XNhxImyYRw9mOkfpJbrofcWhK-NxFkizjDA0lueVkuulcA51QJ6GxTBc88OIk4vgiQNl6oFs-s55lo25duhBIsPq2Ul_nU1VRcpjUyjTkZk47hcaemJBMeWOhnOV1xF0HlnkCH1H-8SuLeJF6V95vMnjtjF/p.jpeg',
                        designation:'DEG 1'
                    },
                    {
                        name:'P.NITHIN',
                        image:'https://previews.dropbox.com/p/thumb/ACK3Dk0meivWUJswc2U_qE6ICr1hnScFtCrYlUkYoLIyy4Gzc8JZqaZXVCtT05theI-zW76ahBfOTQN-HTeJwvvU6cZ3-XdIgh3GLtE4sEg4ogDI1IqIg3-aKk3GnKGHasAFZGxcA63LIwZrYRUkgNOqOeXKbWYKdj7PP85WogZ-_6UpkH1fEe2I-ZgvgR4EvC0fmjYiHWVVA69Y_LazMcFMov-B-ynqr8E7MMQu5IDbXj1ZyHuT0HJAlHA94ap5Jrjo5-hItPf-3ax85LUD5rQxh08tpb2PWUsM0ER_k9hHWe4N-hOaaBw8gLRy5huLEJajyDTCk2AZlb8yDgbDZc26/p.jpeg',
                        designation:'DEG 2'
                    },
                    {
                        name:'D.SAITEJA',
                        image:'https://previews.dropbox.com/p/thumb/ACIr2yubsOL_BlNElyVEtKz4vjrY6V8VkpxlYZTIRpKlgjI67Mjoz7HlRsirIhSi11iETzWYTN-sU7tfr7BmBiezc_b6Y7uqWr0Bg6B1paF84v0JCvqKypIiSEbmAo97Gszbo_idehstfXZB6NmlSPYa7VHuOsTmmThnD6X1QLaWtVfL0YK5OiXTVvBx_NtGqRrEsA-9pFMO4GHTphjJQcYzKKku_tvzF0zBOfUV7m6iaHxiKGm-dLFVPODohGtrbUrMBb6Uv0-GWa3J0aKoS1r6QhUrCp0jEP3cfzAFj6rh2qK88QKjtvImfdmcGu56nu5NDbCdiLMdNinJ9q0Moj3T/p.jpeg',
                        designation:'DEG 3'
                    },
                    {
                        name:'D.SURESH',
                        image:'https://previews.dropbox.com/p/thumb/ACKeJoKAUK8ZXzTO5d_mnj8XkUkmSElKmNlMMuwuVmAHxrzBGE7OU8XHxyK-ttp7hqv4d4Rh-X300Bs4kMl2LJDkdCl8Nh_mMjci6Q8H4AhYFjz0mq8X3BwngEIx-a9CJlIEZKlhlOLewY6czGoXRP2fOU8sua1d_sH2_cjvUCT7EwGRXujzfhDRUQOKM4PnUvT2mxIXE56RKcZ-GCVXzNRnj2YsEzVppMvcsRrIxp8E80k-3eB7V9jjNl-bH7dd9sWTDNdUjCADMQJEBxDKZWuo10ac4yctncWWhETnRcn-Pyjd_lGMxCYdeg9Esv1o8efGlAFxSO7FVJmqErXWbv3O/p.jpeg',
                        designation:'DEG 3'
                    },
                    {
                        name:'K.SWAROOP',
                        image:'https://previews.dropbox.com/p/thumb/ACIvXOjXQe_tfqIuqCvbMO1y8UcJxyStOYtmvP5q-InURJZBxuBXW8meS2VzGkYB4h1jOE8sFyBF6xY-KxUDpvDv-xFbHmd3FuhPBAC-lq6oiMUhvN_bPWISwjTV5OWWHv-TcwFyu23lsuiwlgVALLm5orOv7JEPRMzJiTZA0M_C7gky29Ba3D9cU-w6RoNOElq_UTJKpMAr0AFSefDm72raJKXH14yeFOIwnJRrqWTV4mY8_Px8zRNRnHzsijm-VoaJtInrKhg51PBAKgPTTnsrpL5Z3bqtUXBSqYqTibTKuAJOVjVjSQU1vOC1K1sEG3Fhk5EtueT9bdDClWiB-TK9/p.jpeg',
                        designation:'DEG 3'
                    }
                ]
            },
        ]
    },
    {
        parent:"Website",
        children:[{
            role: '',
            members:[
                    {
                        name:'Harsha Vardhan Polamarasetty',
                        image:'https://i.postimg.cc/bqfCFJGM/Whats-App-Image-2024-02-11-at-19-15-52.jpg',
                    },
                    {
                        name:'Dinesh SriSanth Adari',
                        image:'https://i.postimg.cc/SKSSxtp7/photo-2024-02-14-16-38-29.jpg',
                    },
                    {
                        name:'Yaswanth Boina',
                        image:'https://i.postimg.cc/YMxXjCw2/IMG-1137.jpg',
                    },
                    {
                        name:'Nahfid Nissar',
                        image:'https://previews.dropbox.com/p/thumb/ACJRkUcqkQbDZha6mqiAwS_3nZKZMck5mIerZ4NShZGW3CH3OP4Le6evchX4LvQvqUvTJ-7ukaon9EOtKN4s2_bDZTHhpPjPjmf-rdE2MuJH0KeKHv95oypDUU0W-SEKfiuVI2PY1Rbt_tGFMc1IT6YS3bTiG2k6ExCV2CP5pug_1gviZonTMKDt6lscX_NmSO8GpJXmcArFd8QZVWsLbrm-qXtXfWrxrMzHFN4mb_AXteOlM3xosoRi0xaBU-4xHW_2Ie4Tl11zpEQdrFI1ZqYgNZGdckNcjWCRXBE4dOSjJcatYcYC97ubyU8T7wGE2vHntNveZByzQJ_UmIg-_N-b/p.jpeg',
                    }
                ]
            }
        ]
    }
]

const activeParent = ref('Chiefs')
const activeParentIndex = computed(() => {
    return teams.findIndex(team => team.parent === activeParent.value);
});

const activeChild = ref(teams[activeParentIndex.value].children[0].role || '')

const activeChildIndex = computed(() => {
    const activeParentIndexValue = activeParentIndex.value;
    const activeChildValue = activeChild.value;

    if (activeParentIndexValue !== -1) {
        const activeParentChildren = teams[activeParentIndexValue].children;

        // Find the index of the active child role
        const index = activeParentChildren.findIndex(child => child.role === activeChildValue);

        return index;
    }

    return -1;
});

const handleParentNavItemClick = (team) =>{
    activeParent.value = team
    activeChild.value = teams[activeParentIndex.value].children[0].role
}

const handleChildrenNavItemClick = (role) =>{
    activeChild.value = role.role
}

onMounted(()=>{
    document.title = `Team - Cine Carnival`
})

</script>

<template>
    <div class="flex flex-col min-h-[100vh] bg-[rgb(0,0,0)] justify-center py-4 ssm:pb-12 px-8">
        <button @click="router.back()" class="arrow-icon-prev fixed top-5 left-5 duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
        </button>
        <span class="text-center font-montserrat font-extrabold tracking-wide text-3xl sm:text-4xl relative mt-16">Team Carnival</span>
        <div class="flex flex-col gap-8 w-full justify-center relative mt-6">
            <nav aria-label="team-parent-nav" class="flex justify-center">
                <div class="border-b-2 border-gray-300 border-opacity-50 px-8 flex flex-wrap justify-center gap-8 pb-2">
                    <button :class="activeParent==team.parent ? 'text-gray-50': 'text-gray-400'" class="text-xl hover:text-gray-300 font-semibold transition-all tracking-wider" v-for="team in teams" :key="team.parent" @click="handleParentNavItemClick(team.parent)">{{ team.parent }}</button>
                </div>
            </nav>
            <nav v-if="teams[activeParentIndex].children[0].role.length>0 || false" aria-label="team-children-nav" class="flex justify-center">
                <div class="border-b-2 border-gray-300 border-opacity-50 px-8 flex flex-wrap justify-center gap-8 pb-2">
                    <button :class="activeChild==role.role?'text-gray-50':'text-gray-400'" class="text-xl hover:text-gray-300 font-semibold transition-all tracking-wider" v-for="role in teams[activeParentIndex].children" :key="role" @click="handleChildrenNavItemClick(role)">{{ role.role }}</button>
                </div>
            </nav>
        </div>

        <div class="flex relative min-[100vh] mt-12 justify-center">
            <div class="flex sm:gap-14 gap-10 flex-wrap justify-evenly">
                <div class="group rounded-2xl cursor-pointer scale-95 hover:scale-100 transition-all bg-[#1d1e2a] max-w-[250px] max-h-[350px] md:max-w-[300px] md:max-h-[400px] overflow-hidden" v-for="(member, index) in teams[activeParentIndex].children[activeChildIndex].members" :key="index">
                    <img class="group-hover:bg-opacity-20" :src="member.image" :alt="member.name"/>
                    <!-- <div class="flex rounded-r-lg group-hover:bg-[rgb(0,0,0)] group-hover:translate-x-0 group-hover:transition-all group-hover:duration-700 -translate-x-10 group-hover:backdrop:blur-xl flex-col px-4 py-2 absolute opacity-0 group-hover:opacity-100 bg-transparent bottom-3 text-center">
                        <span class="text-lg text-gray-300 font-semibold font-merriweather">{{ member.name }}</span>
                        <span class="text-md text-gray-400 font-robotoslab">{{ member.designation }}</span>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Oswald:wght@400;600&family=Roboto+Slab:wght@300;400;700&display=swap');
.arrow-icon-prev{
    animation: left-right 1000ms infinite;
}

@keyframes left-right {
    0% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(-5px);
    }
    100% {
        transform: translateX(0);
    }
}

</style>