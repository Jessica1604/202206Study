<template>
    <div>
        <div v-if="items.length == 0">已经没有课程了</div>

        <div v-else>
            <div v-for="item in items" :key="item" 
              :class="{active: selectedCourse == item}" @click="selectedCourse= item">
              {{ item.name }}
            </div>
            <!-- <div v-for="item in items" :key="item" 
            :style="{backgroundColor: selectedCourse == item ? '#ddd' : 'transparent'}" @click="selectedCourse= item">
                {{ item }}
            </div> -->
        </div>
    </div>
</template>

<script>
    import {getCourList} from '../api/courseList'
    export default {
        name: 'courseList',
        data() {
            return {
                items: [],
                selectedCourse: '',
            }
        },
        async created () {
            let courseList = await getCourList();
            console.log(courseList);
            this.items = courseList;
        },
        
    }
</script>

<style lang="less" scoped>
.active{
   background-color: #ddd;
   cursor: pointer;
   cursor: pointer;
}
</style>