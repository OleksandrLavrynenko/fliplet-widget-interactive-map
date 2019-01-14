Fliplet.Floorplan.component('marker-panel', {
  componentName: 'Marker Panel',
  props: {
    id: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'marker-panel'
    },
    isFromNew: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onChangeData() {
      const componentData = _.pick(this, ['id', 'name', 'icon', 'type', 'isFromNew'])
      Fliplet.Floorplan.emit('marker-panel-settings-changed', componentData)
    },
    openIconPicker() {
      const $vm = this
      $vm.icon = $vm.icon || '';

      window.iconPickerProvider = Fliplet.Widget.open('com.fliplet.icon-selector', {
        // Also send the data I have locally, so that
        // the interface gets repopulated with the same stuff
        data: $vm.icon,
        // Events fired from the provider
        onEvent: function(event, data) {
          if (event === 'interface-validate') {
            Fliplet.Widget.toggleSaveButton(data.isValid === true)
          }
        }
      });

      window.addEventListener('message', function(event) {
        if (event.data === 'cancel-button-pressed') {
          window.iconPickerProvider.close()
          window.iconPickerProvider = null

          Fliplet.Studio.emit('widget-save-label-update', {
            text: 'Save'
          })
        }
      })

      Fliplet.Studio.emit('widget-save-label-update', {
        text: 'Select & Save'
      })

      window.iconPickerProvider.then((data) => {
        if (data.data) {
          $vm.icon = data.data.icon;
        }
        $vm.onChangeData()
        window.iconPickerProvider = null
        Fliplet.Studio.emit('widget-save-label-reset');
        return Promise.resolve();
      })
    }
  }
});