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

  const baseInputClasses = "w-full border border-gray-200 rounded-xl p-4 pl-12 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all appearance-none bg-white shadow-sm hover:border-gray-300";
  const textInputClasses = `${baseInputClasses} text-gray-800 font-medium`;
  const datePickerInputClasses = `${baseInputClasses} text-gray-800 font-medium cursor-pointer relative z-10`;
  const selectClasses = `${baseInputClasses} text-gray-800 font-medium cursor-pointer bg-white`;
  const labelClasses = "block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1";
  const iconClasses = "absolute left-4 top-[42px] text-gray-400 z-20 pointer-events-none";
  const childAgeSelectClasses = "w-full bg-white border border-gray-200 rounded-lg p-3 text-sm text-gray-800 focus:outline-none focus:border-red-500 transition appearance-none text-center cursor-pointer shadow-sm font-medium";

  const ageOptions = [];
  ageOptions.push(<option key={0} value={0} className="bg-white text-gray-800">{t('forms.hotels.baby')}</option>);
  for (let i = 1; i <= 17; i++) {
      ageOptions.push(<option key={i} value={i} className="bg-white text-gray-800">{i} {i > 1 ? t('forms.hotels.years') : t('forms.hotels.year')}</option>);
  }

  return (
    <form onSubmit={handleSearch} className="space-y-4 text-left">
      <div className="flex justify-center mb-6">
        <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
          <img src="https://www.google.com/s2/favicons?domain=hotels.com&sz=128" alt="Hotels.com" className="w-12 h-12 object-contain" />
        </div>
      </div>

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
            popperPlacement="bottom-start"
            portalId="root"
            autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
            <label className={labelClasses}>{t('forms.hotels.adults')}</label>
            <Users size={18} className={iconClasses} />
            <select name="adults" className={selectClasses} value={formData.adults} onChange={handleChange}>
                {[1,2,3,4,5,6].map(num => (<option key={num} value={num} className="bg-white text-gray-800">{num}</option>))}
            </select>
        </div>
        <div className="relative">
            <label className={labelClasses}>{t('forms.hotels.children')}</label>
            <Baby size={18} className={iconClasses} />
            <select name="childrenCount" className={selectClasses} value={formData.childrenCount} onChange={handleChildrenCountChange}>
                <option value={0} className="bg-white text-gray-800">{t('forms.hotels.children_none')}</option>
                {[1,2,3,4,5,6].map(num => (<option key={num} value={num} className="bg-white text-gray-800">{num}</option>))}
            </select>
        </div>
      </div>

      {formData.childrenCount > 0 && (
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 animate-in fade-in slide-in-from-top-2 duration-300">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 ml-1">{t('forms.hotels.children_ages')}</label>
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
        className="w-full mt-6 bg-[#d32f2f] hover:bg-[#b71c1c] text-white font-bold py-4 rounded-full shadow-lg shadow-red-900/40 transition-all hover:scale-[1.01] active:scale-[0.98] text-lg uppercase tracking-tight"
      >
        {t('forms.hotels.submit')}
      </button>
    </form>
  );
};

export default HotelsForm;