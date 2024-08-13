import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useAppStore } from '../stores/useAppStore';
import { Recipe } from '../types';

export default function Modal() {
  const modal = useAppStore(state => state.modal)
  const closeModal = useAppStore(state => state.closeModal)
  const selectedRecipe = useAppStore(state => state.recipe)

  const renderIngridients = () => {
    const ingridients: JSX.Element[] = [];
    for(let i = 1; i<= 15; i++) {
      const ingridient = selectedRecipe[`strIngredient${i}` as keyof Recipe]
      const measure = selectedRecipe[`strMeasure${i}` as keyof Recipe]

      if(ingridient && measure) {
        ingridients.push(
          <li key={ingridient}>
            {ingridient} - {measure}
          </li>
        )
      }
    }

    
    return (
      <ul>
        {ingridients}
      </ul>
    )
  }

  return (
    <>
      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => closeModal()}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                  <Dialog.Title as="h3" className="text-gray-900 text-4xl font-extrabold my-5 text-center">
                      {selectedRecipe.strDrink}
                  </Dialog.Title>
                  <img
                    src={selectedRecipe.strDrinkThumb} 
                    alt={`imagen bebida ${selectedRecipe.strDrink}`} 
                    className='w-96 mx-auto'
                  />
                  <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                    Ingredientes y Cantidades
                  </Dialog.Title>
                  {renderIngridients()}
                  <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                    Instrucciones
                  </Dialog.Title>
                  <p className='text-lg'>{selectedRecipe.strInstructions}</p>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}