<template>
    <div class="section-wrap">
        <!-- TABS -->
        <div class="tabs">
            <ul>
                <li v-bind:class="{ 'is-active':tabsel == 'first' }" @click="tabsel = 'first'">
                    <a class="tabs__text">Mäd (Senior)</a>
                </li>
                <li v-bind:class="{ 'is-active':tabsel == 'second' }" @click="tabsel = 'second'">
                    <a class="tabs__text">Mäd (Mid-Weight)</a>
                </li>
                <li v-bind:class="{ 'is-active':tabsel == 'third' }" @click="tabsel = 'third'">
                    <a class="tabs__text">Bloo</a>
                </li>
                <li v-bind:class="{ 'is-active':tabsel == 'fourth' }" @click="tabsel = 'fourth'">
                    <a class="tabs__text">Rooster Creative</a>
                </li>
            </ul>
        </div>
        <!-- Tab panes -->
        <div class="tabs__content">
            <div v-show="tabsel == 'first'">
                <h2 class="subtitle" style="margin-bottom: 0.5rem;">Senior front-end developer <a href="https://www.xn--md-via.com/" target="_blank">@Mäd Creative Consultancy</a></h2>
                <p class="p-small">Jane 2019 -  present</p>
                <ul class="tabs__content__list">
                    <li>Special focus on rapid, mobile first web development.</li>
                    <li>Work with a vareity of technology and frameworks such as Webflow, Ghost, Vuejs.</li>
                    <li>Specific interest in writing Modular CSS, performance optimization.</li>
                    <li>Regular interfacing with clients, running design sprints, interviewing potential candidates and project lead activities.</li>
                </ul> 
            </div>
            <div v-show="tabsel == 'second'">
                <h2 class="subtitle" style="margin-bottom: 0.5rem;">Front-end developer/designer <a href="https://www.xn--md-via.com/" target="_blank">@Mäd Creative Consultancy</a></h2>
                <p class="p-small">Sep 2018 -  Jan 2019</p>
                <ul class="tabs__content__list">
                    <li>Development and release of the Mäd 3.1 marketing website.</li>
                    <li>Lead developer of the new ISI GROUP corporate website.</li>
                    <li>Design lead for Family Care First (part of Save the Children).</li>
                </ul> 
            </div>
            <div v-show="tabsel == 'third'">
                <h2 class="subtitle" style="margin-bottom: 0.5rem;">Front-end developer <a href="https://www.bloo.io/" target="_blank">@Bloo</a></h2>
                <p class="p-small">Jul 2018 - Sep 2018</p>
                <ul class="tabs__content__list">
                    <li>Engineering and maintaining early features of the Bloo web app using Vuejs.</li>
                    <li>Providing specialist UX knowledge to help shape and implement the current design.</li>
                    <li>Proposed and implemented a more modular CSS approach using the BEM methodology.</li>
                </ul> 
            </div>
            <div v-show="tabsel == 'fourth'">
                <h2 class="subtitle" style="margin-bottom: 0.5rem;">Intern <a href="https://www.bloo.io/" target="_blank">@Rooster Creative Marketing</a></h2>
                <p class="p-small">Jan 2016 - Feb 2016</p>
                <ul class="tabs__content__list">
                    <li>Supporting the development team with HTML and CSS editis in Wordpress and Drupal.</li>
                    <li>Working closely with UX designers to develop front-end features such as forms.</li>
                </ul> 
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Timeline',
    components: {
    },
    data() {
        return {
            tabsel: 'first'
        }
    }
}
</script>

<style lang="scss" scoped>

@import './static/css/global.css';

@mixin tab-padding {
    padding: 0em 5em 0em 5em;
}

.tabs li.is-active a {
    border-bottom-color: #ff3860;
    color: #ff3860!important;
    font-weight: bold;
}

.tabs {
    @include tab-padding();
    & ul {
        justify-content: space-evenly;
        margin: 0em 0em 2em 0em;
    }
    &__content {
        @include tab-padding();
        &__list {
            list-style-type: disc;
            margin: 1em;
        }
    }
    &__text {
        color: #333!important;
        font-weight: 300;
    }
}

</style>
