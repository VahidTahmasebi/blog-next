export const metadata = {
  title: "خانه  - وب اپلیکیشن مدیریت بلاگ",
};

export default function Home() {
  return (
    <div>
      <h1 className="my-20 text-center text-2xl md:text-5xl font-bold text-secondary-800">
        اپلیکیشن مدیریت بلاگ
      </h1>

      <div>
        <p className="text-center text-lg text-secondary-500 leading-loose">
          جایی که قراره بتونی یه اپلیکیشن بلاگ کامل رو مدیریت کنی!
          <br /> بتونی بلاگ بسازی - کامنت بگذاری و در پنلت همه اتفاقات رو رصد
          کنی!
        </p>
      </div>
    </div>
  );
}
