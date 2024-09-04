import Link from "next/link";

function NotFound() {
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="flex justify-center pt-10">
        <div>
          <p className="mb-8 text-2xl font-semibold text-secondary-500">
            هیچ پستی با این مشخصات یافت نشد
          </p>
          <Link href="/blogs" className="text-lg font-bold text-primary-900">
            رفتن به صفحه پست؟
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
 