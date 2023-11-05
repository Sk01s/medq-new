import React, { useRef } from "react";
import Link from "next/link";
import firebaseInstance from "@/lib/firebase";
import { toast } from "react-toastify";

const OrderItem = ({ order, index }) => {
  const price = order?.products?.reduce(
    (acc, next) => parseInt(acc) + parseInt(next.price),
    0
  );
  const totalPrice = price + 10;
  const orderRef = useRef(null);
  const onDeleteProduct = () => {
    orderRef.current.classList.toggle("item-active");
  };

  const onConfirmDelete = () => {
    // dispatch(removeProduct(order.id));
    firebaseInstance
      .removeOrder(order.id)
      .then(() => {
        toast.success("Item successfully deleted");
        orderRef.current.remove();
        orderRef.current.classList.remove("item-active");
      })
      .catch((error) => {
        toast.error("failed to delete", error);
      });
  };
  const onCancelDelete = () => {
    orderRef.current.classList.remove("item-active");
  };

  return (
    <div className={`item item-products `} ref={orderRef}>
      <div className="grid grid-count-6">
        {/* <div className="grid-col">
          <span className="text-overflow-ellipsis">{order.payment}</span>
        </div> */}
        <div className="grid-col">
          <span>{Number.isInteger(price) && <>$ {totalPrice} </>}</span>
        </div>
        <div className="grid-col">
          <span>{order?.fulfillment ? "Yes" : "No"}</span>
        </div>
        <div className="grid-col">
          {/* <span>{order.date.toDate()}</span> */}
        </div>
        <div className="grid-col">
          {order.products && (
            <Link href={`/admin/order/${order.id}`}>View details</Link>
          )}
        </div>
        {
          <div className="item-action">
            <button
              className="button button-border button-small button-danger"
              onClick={onDeleteProduct}
              type="button"
            >
              Delete
            </button>
            <div className="item-action-confirm">
              <h5>Are you sure you want to delete this?</h5>
              <button
                className="button button-small button-border"
                onClick={onCancelDelete}
                type="button"
              >
                No
              </button>
              &nbsp;
              <button
                className="button button-small button-danger"
                onClick={onConfirmDelete}
                type="button"
              >
                Yes
              </button>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default OrderItem;
