import { useState } from 'react';
import { Search, Calendar, Users, Baby } from 'lucide-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';

const HotelsForm = ({ partnerData, onClose }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    destination: '',
    checkInDate: null,
    checkOutDate: null,
    adults: 2,
    childrenCount: 0,
    childrenAges: []
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setFormData({ ...formData, checkInDate: start, checkOutDate: end });
  };

  const handleChildrenCountChange = (e) => {
    const count = parseInt(e.target.value);
    const newAges = Array(count).fill(0).map((_, i) => formData.childrenAges[i] || 0);
    setFormData({ ...formData, childrenCount: count, childrenAges: newAges });
  };

  const handleChildAgeChange = (index, newAge) => {
    const newAges = [...formData.childrenAges];
    newAges[index] = parseInt(newAge);
    setFormData({ ...formData, childrenAges: newAges });
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (!formData.checkInDate || !formData.checkOutDate) {
        alert(t('messages.select_dates'));
        return;
    }

    const baseUrl = 'https://www.hotels.com/Hotel-Search';
    const params = new URLSearchParams();

    if (formData.destination) params.append('destination', formData.destination);
    params.append('startDate', format(formData.checkInDate, 'yyyy-MM-dd'));
    params.append('endDate', format(formData.checkOutDate, 'yyyy-MM-dd'));
    params.append('adults', formData.adults);

    if (formData.childrenCount > 0) {
        const childrenParamStr = formData.childrenAges.map(age => `1_${age}`).join(',');
        params.append('children', childrenParamStr);
    }

    const targetUrl = `${baseUrl}?${params.toString()}`;
    const finalAffiliateUrl = `${partnerData.trackingUrl}?url=${encodeURIComponent(targetUrl)}`;

    window.open(finalAffiliateUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const baseInputClasses = "w-full border border-white/10 rounded-xl p-3 pl-10 placeholder:text-slate-400 focus:outline-none focus:border-red-400/50 transition appearance-none";
  const textInputClasses = `${baseInputClasses} bg-white/5 text-white`;
  const datePickerInputClasses = `${baseInputClasses} bg-white/5 text-white cursor-pointer relative z-10`;
  const selectClasses = `${baseInputClasses} bg-slate-800 text-white cursor-pointer`;
  const labelClasses = "block text-sm font-medium text-slate-300 mb-1.5 ml-1";
  const iconClasses = "absolute left-3 top-[38px] text-slate-400 z-20";
  const childAgeSelectClasses = "w-full bg-slate-800 border border-white/10 rounded-lg p-2 text-sm text-white focus:outline-none focus:border-red-400/50 transition appearance-none text-center cursor-pointer";

  const ageOptions = [];
  ageOptions.push(<option key={0} value={0} className="bg-slate-800">{t('forms.hotels.baby')}</option>);
  for (let i = 1; i <= 17; i++) {
      ageOptions.push(<option key={i} value={i} className="bg-slate-800">{i} {i > 1 ? t('forms.hotels.years') : t('forms.hotels.year')}</option>);
  }

  return (
    <form onSubmit={handleSearch} className="space-y-4 text-left">
      <div className="relative">
        <label className={labelClasses}>{t('forms.hotels.destination')}</label>
        <Search size={18} className={iconClasses} />
        <input
          type="text"
          name="destination"
          placeholder={t('forms.hotels.destination_placeholder')}
          required
          className={textInputClasses}
          onChange={handleChange}
        />
      </div>

      <div className="relative">
        <label className={labelClasses}>{t('forms.hotels.dates')}</label>
        <Calendar size={18} className={iconClasses} />
        <DatePicker
            selected={formData.checkInDate}
            onChange={handleDateChange}
            startDate={formData.checkInDate}
            endDate={formData.checkOutDate}
            selectsRange
            minDate={new Date()}
            placeholderText={t('forms.hotels.dates_placeholder')}
            className={datePickerInputClasses}
            wrapperClassName="w-full"
            dateFormat="dd/MM/yyyy"
            required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
            <label className={labelClasses}>{t('forms.hotels.adults')}</label>
            <Users size={18} className={iconClasses} />
            <select name="adults" className={selectClasses} value={formData.adults} onChange={handleChange}>
                {[1,2,3,4,5,6].map(num => (<option key={num} value={num} className="bg-slate-800">{num}</option>))}
            </select>
        </div>
        <div className="relative">
            <label className={labelClasses}>{t('forms.hotels.children')}</label>
            <Baby size={18} className={iconClasses} />
            <select name="childrenCount" className={selectClasses} value={formData.childrenCount} onChange={handleChildrenCountChange}>
                <option value={0} className="bg-slate-800">{t('forms.hotels.children_none')}</option>
                {[1,2,3,4,5,6].map(num => (<option key={num} value={num} className="bg-slate-800">{num}</option>))}
            </select>
        </div>
      </div>

      {formData.childrenCount > 0 && (
        <div className="bg-white/5 p-3 rounded-xl border border-white/10 animate-in slide-in-from-top-2 duration-200">
            <label className="block text-xs font-medium text-slate-400 mb-2 ml-1">{t('forms.hotels.children_ages')}</label>
            <div className="grid grid-cols-3 gap-2">
                {formData.childrenAges.map((age, index) => (
                    <div key={index} className="flex flex-col">
                        <select className={childAgeSelectClasses} value={age} onChange={(e) => handleChildAgeChange(index, e.target.value)}>{ageOptions}</select>
                    </div>
                ))}
            </div>
        </div>
      )}

      <button
        type="submit"
        className="w-full mt-6 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-red-500/20 transition-all active:scale-[0.98]"
      >
        {t('forms.hotels.submit')}
      </button>
    </form>
  );
};

export default HotelsForm;