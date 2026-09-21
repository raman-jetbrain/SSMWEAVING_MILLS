import React, { useEffect, useRef, useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import img1 from '../../assets/Products/prod1.jpg'
import img2 from '../../assets/Products/prod2.webp'
import img3 from '../../assets/Products/prod3.jpg'
import img4 from '../../assets/Products/prod4.jpg'
import img5 from  '../../assets/Products/prod5.jpg'
import img6 from '../../assets/Products/prod6.webp'

const products = [
  { name: 'Woven Fabrics', image: img1, detail: 'Premium woven textiles for fashion and industrial use.' },
  { name: 'Knitted Fabrics', image: img2, detail: 'Comfort-first knits for everyday and premium use.' },
  { name: 'Home Textiles', image: img3, detail: 'Durable and elegant fabrics for interiors and hospitality.' },
  { name: 'Export Ready Goods', image: img4, detail: 'High-volume shipments crafted to international standards.' },
   { name: 'Home Textiles', image: img5, detail: 'Durable and elegant fabrics for interiors and hospitality.' },
  { name: 'Export Ready Goods', image: img6, detail: 'High-volume shipments crafted to international standards.' },
   { name: 'Woven Fabrics', image: img1, detail: 'Premium woven textiles for fashion and industrial use.' },
  { name: 'Knitted Fabrics', image: img2, detail: 'Comfort-first knits for everyday and premium use.' },
  { name: 'Home Textiles', image: img3, detail: 'Durable and elegant fabrics for interiors and hospitality.' },
  { name: 'Export Ready Goods', image: img4, detail: 'High-volume shipments crafted to international standards.' },
   { name: 'Home Textiles', image: img5, detail: 'Durable and elegant fabrics for interiors and hospitality.' },
  { name: 'Export Ready Goods', image: img6, detail: 'High-volume shipments crafted to international standards.' },
  
]

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'Custom size']
const minimumQuantity = 500

const ProductCon = () => {
  const [selectedSizes, setSelectedSizes] = useState({})
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [quantity, setQuantity] = useState('')
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [pendingOrder, setPendingOrder] = useState(null)
  const [confirmationMessage, setConfirmationMessage] = useState('')
  const productViewRef = useRef(null)
  const confirmationTimerRef = useRef(null)
  const cartHideTimerRef = useRef(null)

  useEffect(() => () => {
    clearTimeout(confirmationTimerRef.current)
    clearTimeout(cartHideTimerRef.current)
  }, [])

  const openProduct = (item, index) => {
    setSelectedProduct({ item, index })
    setQuantity('')
    if (productViewRef.current) productViewRef.current.scrollTop = 0
  }

  const showConfirmation = (message) => {
    setConfirmationMessage(message)
    clearTimeout(confirmationTimerRef.current)
    confirmationTimerRef.current = setTimeout(() => setConfirmationMessage(''), 5000)
  }

  const addToCart = (isOrder = false) => {
    const numericQuantity = Number(quantity)

    if (!selectedProduct || !selectedSizes[selectedProduct.index] || numericQuantity < minimumQuantity) return

    const cartKey = `${selectedProduct.index}-${selectedSizes[selectedProduct.index]}`
    setCartItems((current) => {
      const existingItem = current.find((item) => item.key === cartKey)

      if (existingItem) {
        return current.map((item) => item.key === cartKey
          ? { ...item, quantity: item.quantity + numericQuantity }
          : item)
      }

      return [...current, {
        key: cartKey,
        name: selectedProduct.item.name,
        size: selectedSizes[selectedProduct.index],
        quantity: numericQuantity,
      }]
    })
    setSelectedProduct(null)
    setCartOpen(true)
    showConfirmation(isOrder ? 'Order placed successfully.' : 'Product added to cart.')
  }

  const orderNow = () => {
    const numericQuantity = Number(quantity)

    if (!selectedProduct || !selectedSizes[selectedProduct.index] || numericQuantity < minimumQuantity) return

    setPendingOrder({
      key: `${selectedProduct.index}-${selectedSizes[selectedProduct.index]}`,
      name: selectedProduct.item.name,
      size: selectedSizes[selectedProduct.index],
      quantity: numericQuantity,
    })
    setSelectedProduct(null)
    setCartOpen(true)
  }

  const confirmOrder = () => {
    if (!pendingOrder) return

    setCartItems((current) => {
      const existingItem = current.find((item) => item.key === pendingOrder.key)

      if (existingItem) {
        return current.map((item) => item.key === pendingOrder.key
          ? { ...item, quantity: item.quantity + pendingOrder.quantity }
          : item)
      }

      return [...current, pendingOrder]
    })
    setPendingOrder(null)
    setCartOpen(true)
    showConfirmation('Order placed successfully.')
    clearTimeout(cartHideTimerRef.current)
    cartHideTimerRef.current = setTimeout(() => setCartOpen(false), 5000)
  }

  const clearCart = () => {
    setCartItems([])
    setPendingOrder(null)
    setCartOpen(false)
  }

  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Our products</p>
          <h3 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">Textiles built for performance and trust</h3>
        </div>

        {cartItems.length > 0 && (
          <div className="mb-6 flex justify-end">
            <button
              type="button"
              onClick={() => setCartOpen((current) => !current)}
              className="border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:border-emerald-600 hover:text-emerald-700"
            >
              Order / Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)})
            </button>
          </div>
        )}

        <div className="grid w-full auto-rows-116 gap-10 md:grid-cols-2 xl:grid-cols-3">
          {products.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              onClick={() => openProduct(item, index)}
              className="h-full cursor-pointer overflow-hidden border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <img src={item.image} alt={item.name} className="h-56 w-full object-cover" />
              <div className="flex min-h-60 flex-col p-5">
                <button
                  type="button"
                  onClick={() => openProduct(item, index)}
                  className="mb-2 text-left text-xl font-bold text-slate-900 hover:text-emerald-700"
                >
                  {item.name}
                </button>
                <p className="mb-5 text-xs font-semibold uppercase tracking-wider text-emerald-700">About this product</p>
                <p className="text-sm leading-6 text-slate-600">{item.detail}</p>
                <div className="mt-auto">
                  <p className="mb-2 text-sm font-semibold text-slate-800">Select size</p>
                  <div className="flex flex-wrap gap-2" role="group" aria-label={`Select size for ${item.name}`}>
                    {sizes.map((size) => {
                      const isSelected = selectedSizes[index] === size

                      return (
                        <button
                          key={size}
                          type="button"
                          aria-pressed={isSelected}
                          onClick={(event) => {
                            event.stopPropagation()
                            setSelectedSizes((current) => ({ ...current, [index]: size }))
                          }}
                          className={`border px-3 py-2 text-xs font-semibold transition ${isSelected
                            ? 'border-emerald-700 bg-emerald-700 text-white'
                            : 'border-slate-300 bg-white text-slate-700 hover:border-emerald-600 hover:text-emerald-700'
                            }`}
                        >
                          {size}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {cartOpen && (
        <aside className="fixed left-4 right-4 top-20 z-60 max-h-[calc(100vh-6rem)] overflow-y-auto border border-slate-200 bg-white p-5 shadow-2xl sm:right-auto sm:w-88">
          <div className="mb-4 flex items-center justify-between">
            <h4 className="text-lg font-bold text-slate-900">Your cart</h4>
            <button type="button" onClick={() => setCartOpen(false)} className="text-sm text-slate-500 hover:text-slate-900">Close</button>
          </div>
          {pendingOrder && (
            <div className="mb-4 border border-emerald-200 bg-emerald-50 p-4">
              <p className="text-sm font-bold text-slate-900">Confirm your order</p>
              <p className="mt-2 text-sm text-slate-700">{pendingOrder.name}</p>
              <p className="mt-1 text-xs text-slate-600">Size: {pendingOrder.size} | Quantity: {pendingOrder.quantity}</p>
              <div className="mt-4 grid gap-2">
                <button type="button" onClick={confirmOrder} className="w-full bg-emerald-700 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-800">
                  Confirm order
                </button>
                <button type="button" onClick={() => setPendingOrder(null)} className="w-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-white">
                  Cancel
                </button>
              </div>
            </div>
          )}
          {cartItems.length === 0 && !pendingOrder ? (
            <p className="text-sm text-slate-600">Your cart is empty.</p>
          ) : cartItems.length > 0 ? (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.key} className="border-b border-slate-200 pb-3 text-sm">
                  <p className="font-semibold text-slate-900">{item.name}</p>
                  <p className="mt-1 text-slate-600">Size: {item.size} | Quantity: {item.quantity}</p>
                </div>
              ))}
              <div className="grid gap-2">
                <button type="button" className="w-full bg-emerald-700 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-800">
                  Proceed to order
                </button>
                <button type="button" onClick={clearCart} className="w-full border border-rose-300 px-4 py-2 text-sm font-semibold text-rose-700 hover:bg-rose-50">
                  Clear cart
                </button>
              </div>
            </div>
          ) : null}
        </aside>
      )}

      {confirmationMessage && (
        <div className="fixed bottom-6 left-1/2 z-60 -translate-x-1/2 bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-xl" role="status">
          {confirmationMessage}
        </div>
      )}

      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-white" role="dialog" aria-modal="true" aria-labelledby="product-dialog-title">
          <div ref={productViewRef} className="h-full overflow-y-auto p-6 md:p-10 lg:p-14">
            <div className="relative mx-auto max-w-7xl">
              {cartItems.length > 0 && (
                <button
                  type="button"
                  onClick={() => setCartOpen((current) => !current)}
                  className="mb-6 border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:border-emerald-600 hover:text-emerald-700"
                >
                  Order / Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)})
                </button>
              )}
              <button type="button" onClick={() => setSelectedProduct(null)} className="absolute right-0 top-0 text-2xl text-slate-500 hover:text-slate-900" aria-label="Close product details">&times;</button>
              <div className="grid gap-8 border-b border-slate-200 pb-12 pt-8 md:grid-cols-2 md:gap-12">
                <img src={selectedProduct.item.image} alt={selectedProduct.item.name} className="h-72 w-full object-cover md:h-full md:min-h-96" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">About this product</p>
                  <h4 id="product-dialog-title" className="mt-2 text-2xl font-bold text-slate-900">{selectedProduct.item.name}</h4>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{selectedProduct.item.detail}</p>
                  <p className="mt-6 mb-2 text-sm font-semibold text-slate-800">Select size</p>
                  <div className="flex flex-wrap gap-2" role="group" aria-label={`Select size for ${selectedProduct.item.name}`}>
                    {sizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        aria-pressed={selectedSizes[selectedProduct.index] === size}
                        onClick={() => setSelectedSizes((current) => ({ ...current, [selectedProduct.index]: size }))}
                        className={`border px-3 py-2 text-xs font-semibold ${selectedSizes[selectedProduct.index] === size
                          ? 'border-emerald-700 bg-emerald-700 text-white'
                          : 'border-slate-300 bg-white text-slate-700 hover:border-emerald-600'
                          }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <span className="text-sm font-semibold text-slate-800">Quantity</span>
                    <div className="flex items-center border border-slate-300">
                      <button type="button" onClick={() => setQuantity((current) => Math.max(minimumQuantity, (Number(current) || minimumQuantity) - 1))} className="px-3 py-2 text-slate-700">-</button>
                      <input
                        type="number"
                        min={minimumQuantity}
                        step="1"
                        value={quantity}
                        placeholder={minimumQuantity}
                        onChange={(event) => setQuantity(event.target.value === '' ? '' : Math.max(0, Number(event.target.value)))}
                        className="w-24 border-x border-slate-300 py-2 text-center text-sm outline-none focus:border-emerald-600"
                        aria-label="Quantity"
                      />
                      <button type="button" onClick={() => setQuantity((current) => Math.max(minimumQuantity, (Number(current) || minimumQuantity) + 1))} className="px-3 py-2 text-slate-700">+</button>
                    </div>
                  </div>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => addToCart()}
                      disabled={!selectedSizes[selectedProduct.index] || Number(quantity) < minimumQuantity}
                      className="w-full border border-emerald-700 px-4 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 disabled:cursor-not-allowed disabled:border-slate-300 disabled:text-slate-400"
                    >
                      Add to cart
                    </button>
                    <button
                      type="button"
                      onClick={orderNow}
                      disabled={!selectedSizes[selectedProduct.index] || Number(quantity) < minimumQuantity}
                      className="w-full bg-emerald-700 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-800 disabled:cursor-not-allowed disabled:bg-slate-300"
                    >
                      Order now
                    </button>
                  </div>
                  {quantity !== '' && Number(quantity) < minimumQuantity && (
                    <p className="mt-2 text-xs text-rose-600">Minimum order quantity is {minimumQuantity}.</p>
                  )}
                  {!selectedSizes[selectedProduct.index] && <p className="mt-2 text-xs text-rose-600">Choose a size before adding this product.</p>}
                </div>
              </div>

              <div className="pt-10">
                <h4 className="mb-6 text-2xl font-bold text-slate-900">More products</h4>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {products.map((item, index) => (
                    <div
                      key={`${item.name}-detail-${index}`}
                      onClick={() => openProduct(item, index)}
                      className="cursor-pointer overflow-hidden border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >
                      <img src={item.image} alt={item.name} className="h-40 w-full object-cover" />
                      <div className="p-4">
                        <button type="button" onClick={() => openProduct(item, index)} className="text-base font-semibold text-slate-900 hover:text-emerald-700">{item.name}</button>
                        <p className="mb-2 mt-4 text-xs font-semibold uppercase tracking-wider text-emerald-700">Select size</p>
                        <div className="flex flex-wrap gap-2" role="group" aria-label={`Select size for ${item.name}`}>
                          {sizes.map((size) => (
                            <button
                              key={size}
                              type="button"
                              aria-pressed={selectedSizes[index] === size}
                              onClick={(event) => {
                                event.stopPropagation()
                                setSelectedSizes((current) => ({ ...current, [index]: size }))
                              }}
                              className={`border px-2 py-1 text-xs font-semibold ${selectedSizes[index] === size
                                ? 'border-emerald-700 bg-emerald-700 text-white'
                                : 'border-slate-300 bg-white text-slate-700 hover:border-emerald-600'
                                }`}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {cartItems.length > 0 && (
        <button
          type="button"
          onClick={() => setCartOpen((current) => !current)}
          aria-label="Open cart"
          title="Open cart"
          className="fixed bottom-6 left-6 z-60 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-700 text-2xl text-white shadow-xl hover:bg-emerald-800"
        >
          <ShoppingCart size={24} strokeWidth={2.25} aria-hidden="true" />
        </button>
      )}
    </section>
  )
}

export default ProductCon