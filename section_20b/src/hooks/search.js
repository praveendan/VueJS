import { ref, computed, watch, toRefs } from 'vue';

export default function useSearch(items, searchProp) {
  const enteredSearchTerm = ref('');
    const activeSearchTerm = ref('');

    const availableItems = computed(function () {
      if (activeSearchTerm.value) {
        return items.filter((prj) =>
          prj[searchProp].includes(activeSearchTerm.value)
        );
      }
      return items;
    });

    const hasItems = computed(function () {
      return items && availableItems.value.length > 0;
    });

    watch(enteredSearchTerm, function (newValue) {
      setTimeout(() => {
        if (newValue === enteredSearchTerm.value) {
          activeSearchTerm.value = newValue;
        }
      }, 300);
    });

    // const propsWithRefs = toRefs(props);
    // const user = propsWithRefs.user;

    const { user } = toRefs(props);

    watch(user, function () {
      enteredSearchTerm.value = '';
    });

    function updateSearch(val) {
      enteredSearchTerm.value = val;
  }
  
  return {
    updateSearch,
    availableItems,
    enteredSearchTerm
  }
}