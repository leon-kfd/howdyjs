<script>
export default {
  name: "JsxRender",
  functional: true,
  props: {
    scope: Object,
    render: Function
  },
  render: (h, ctx) => {
    if (!ctx.props.render) return;
    return ctx.props.render(h, ctx.props.scope)
  }
}
</script>
