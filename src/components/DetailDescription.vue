<template>
  <md-card v-if='resource' class='md-elevation-0'>
    <!-- <md-card-header class='bg-ghost-white'>
      <md-card-header-text>
        <div class="md-title">Description</div>
      </md-card-header-text>
    </md-card-header> -->
    <md-card-content>
      <div v-show='!editDescription'>
        <div v-html='compiledDescription'></div>
      </div>
      <div v-show='editDescription'>
        Supports <a class='' target="_blank" href='https://en.wikipedia.org/wiki/Markdown#Example'>markdown.</a>
        <md-field>
          <md-textarea v-model="resource.description"></md-textarea>
        </md-field>
      </div>
    </md-card-content>
    <md-card-actions>
      <md-button class='md-primary' v-if='editDescription===false && canEdit' @click.native='editDescription=true'>Edit description</md-button>
      <md-button class='md-primary' v-if='editDescription===true' @click.native='updateDescription'>Done</md-button>
    </md-card-actions>
    <md-card-content class='md-caption' v-if='resource.baseProperties'>
      <span><strong>Units:</strong> {{resource.baseProperties.units}}</span>;
      <span><strong>Tolerance:</strong> {{resource.baseProperties.tolerance}}</span>.
    </md-card-content>
  </md-card>
</template>
<script>
import debounce from 'lodash.debounce'
import marked from 'marked'

export default {
  name: 'DetailDescription',
  props: {
    resource: Object,
  },
  computed: {
    compiledDescription( ) {
      return marked( this.resource.description, { sanitize: true } )
    },
    canEdit( ) {
      return this.isOwner ? true : this.resource.canWrite.indexOf( this.$store.state.user._id ) !== -1
    },
    isOwner( ) {
      return this.resource.owner === this.$store.state.user._id
    },
    isStream( ) {
      return this.resource.hasOwnProperty( 'streamId' )
    }
  },
  data( ) {
    return {
      editDescription: false
    }
  },
  methods: {
    updateDescription( ) {
      this.editDescription = false
      if ( this.isStream )
        this.$store.dispatch( 'updateStream', { streamId: this.resource.streamId, description: this.resource.description } )
      else
        this.$store.dispatch( 'updateProject', { _id: this.resource._id, description: this.resource.description})
    },
  }
}

</script>
<style scoped lang='scss'>
.md-field {
  padding-top: 0px;
}

.md-field .md-textarea {
  min-height: 420px !important;
  max-height: 420px !important;
  font-size: 14px !important;
  font-family: monospace;
  padding: 10px !important;
}

</style>