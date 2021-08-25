const baseModes = {
  default: [
    {
      type: 'drag-node',
      enableDelegate: true,
    },
    {
      type: 'tooltip',
      formatText(model) {
        return `<div style="background: #fff;border: 1px solid #303133;border-radius: 4px;padding: 6px;line-height: 1.2;min-width: 10px;">${model.name}<div x-arrow class="popper__arrow"></div>`
      },
    },
    'zoom-canvas',
    'click-detail',
    'drag-canvas',
    'drag-combo',
  ],
}

export { baseModes }
